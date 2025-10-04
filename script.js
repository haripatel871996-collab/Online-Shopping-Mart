let cart = [];

// Add product to cart
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const paypalItems = document.getElementById("paypal-items");

  cartItems.innerHTML = "";
  paypalItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    // Show in cart
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);

    // Add hidden PayPal inputs
    paypalItems.innerHTML += `
      <input type="hidden" name="item_name_${index+1}" value="${item.name}">
      <input type="hidden" name="amount_${index+1}" value="${item.price}">
      <input type="hidden" name="quantity_${index+1}" value="1">
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = "Total: $" + total.toFixed(2);

  // Stripe Link (replace with your product checkout link)
  const stripeLink = document.getElementById("stripe-link");
  stripeLink.href = "https://buy.stripe.com/test_example?amount=" + total.toFixed(2);
}
