const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "1000",
    image: "images/20220130_182022.jpg",
  },
  {
    id: 2,
    name: "Silver Bracelet",
    price: "500",
    image: "images/silver.jpg.webp",
  },
  {
    id: 3,
    name: "Diamond Ring",
    price: "2500",
    image: "images/diamond.webp",
  },
];

const cart = [];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
  // Removed updateLivePersonCartAndTitle from here if it was previously called here
}

function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    productsContainer.innerHTML += `
              <div class="product">
                  <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 200px; height: auto;">
                  <h3>${product.name}</h3>
                  <p>Price: $${product.price}</p>
                  <button onclick="addToCart(${product.id})">Add to Cart</button>
              </div>
          `;
  });
}

function renderCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  cart.forEach((product) => {
    cartContainer.innerHTML += `<li>${product.name} - $${product.price}</li>`;
  });
  updateCartTotal(); // Ensures cart total is updated before updating LivePerson
  updateLivePersonCartAndTitle(); // Ensure this is called after cart is updated
}

function calculateCartTotal() {
  return cart.reduce((total, product) => total + parseFloat(product.price), 0);
}

function updateCartTotal() {
  const total = calculateCartTotal();
  document.getElementById("cartTotal").innerText = `Total Price: $${total}`;
}

// Initial render
document.addEventListener("DOMContentLoaded", (event) => {
  renderProducts();
});
