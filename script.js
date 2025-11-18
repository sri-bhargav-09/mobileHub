const products = [
    { name: "Samsung Galaxy S24", price: 84999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/yC3EBqwKby-samsung-s-series-ultra-mobile-phone-494352154-i-1-1200wx1200h.jpeg" },
    { name: "iPhone 16", price: 129999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/8aZySDPojN-apple-iphone-16-494423018-i-1-1200wx1200h.jpeg" },
    { name: "OnePlus 12", price: 69999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/QYDGfeCFk8-oneplus-12-emrld-494352272-i-1-1200wx1200h.jpeg" },
    { name: "Google Pixel 8", price: 74999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/AYwEm4lirl-googlegoogle-pixel-8-494268285-i-1-1200wx1200h.jpeg" },
    { name: "Redmi note 14 Pro", price: 21999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/opPLsCiAGw-redmi-note-14-pro-5g-494493433-i-1-1200wx1200h.jpeg" },
    { name: "Realme Narzo 70", price: 15999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/j6tk4kikP0-realme-narzo-70x-5g-494422961-i-1-1200wx1200h.jpeg" },
    { name: "Oppo Reno 12 Pro", price: 44999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/ySKR04qC91-oppo-reno12pro-494421811-i-1-1200wx1200h.jpeg" },
    { name: "Vivo V30 Pro", price: 39999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/QNfnPl3vt9-vivo-v30-pro-blu-494352741-i-1-1200wx1200h.jpeg" },
    { name: "Moto Edge 60 pro", price: 22999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/UNXQcfJzH4-moto-edge-60-pro-494581942-i-1-1200wx1200h.jpeg" },
    { name: "Oneplus nord 5", price: 32999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/gRrsb5ytqY-onenord5-494582110-i-1-1200wx1200h.jpeg" },
    { name: "Samsung Galaxy A55", price: 39999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/TvCXUtxuOy-samsung-a55-5g-mobile-phone-494352878-i-1-1200wx1200h.jpeg" },
    { name: "POCO X6 Pro", price: 25999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/PVeBtafVcA-poco-x6pro-smartphone-494352110-i-1-1200wx1200h.jpeg" },
    { name: "Oneplus 13R", price: 44999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/JgizHSKMz3-oneplus-13r-494493585-i-1-1200wx1200h.jpeg" },
    { name: "Motorola Edge 50", price: 18999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/xFJEe8evsC-moto-edge-50-forest-blue-494493064-i-1-1200wx1200h.jpeg" },
    { name: "Vivo X200 Pro", price: 37999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/Zqc4j266aj-vivo-x200pro-494493510-i-1-1200wx1200h.jpeg" },
    { name: "Oppo F31 Pro", price: 22999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/uXGuz0UBQI-oppof31prop5g-494582994-i-1-1200wx1200h.jpeg" },
    { name: "Tecno Camon 30 Pro", price: 20999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/PIpUXGwbIk-tecno-camon-mobile-phone-salt-white-494353548-i-1-1200wx1200h.jpeg" },
    { name: "Apple iphone 15", price: 94999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/_xNzCpcyM9-apple-iphone-15-512gb-pink-493839321-i-1-1200wx1200h.jpeg" },
    { name: "Moto G67 Power", price: 15999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/fUz1ZrenVr-motog67-mp-494742162-i-1-1200wx1200h.jpeg" },
    { name: "Nokia XR20 5G", price: 27999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/fs0nM8CyGH-nokia-xr20-smartphones-491998781-i-1-1200wx1200h.jpeg" },
    { name: "Samsung Galaxy Fold6", price: 176999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/lGjiDr-5hP-samsung-galaxy-fold6-494421984-i-1-1200wx1200h.jpeg" },
    { name: "iphone SE 2022", price: 52000, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/gemkP7QV72-apple-iphone-se-2022-492849495-i-1-1200wx1200h.jpeg" },
    { name: "Samsung Galaxy M15", price: 17999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/S7zaW8vBPd-samsung-galaxy-celestine-blue-mobile-phone-494353239-i-1-1200wx1200h.jpeg" },
    { name: "Vivo Y200e", price: 22999, image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:150/yE4bxZcQ5P-vivo-y200e-494352435-i-1-1200wx1200h.jpeg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.innerText = totalItems;
    }
}

function addToCart(productIndex) {
    const product = products[productIndex];
    let existing = cart.find(item => item.name === product.name);
    
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); 
    alert(`${product.name} added to cart! Total items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`);
}

function renderProducts(list = products) {
    const container = document.getElementById("product-container");
    if (!container) return;
    container.innerHTML = "";
    list.forEach((p, index) => {
        const originalIndex = products.findIndex(item => item.name === p.name); 

        container.innerHTML += `
            <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price.toLocaleString()}</p>
                <button onclick="addToCart(${originalIndex})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>`;
    });
}

function renderCart() {
    const container = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");
    const subtotalDiv = document.getElementById("total-subtotal");
    
    if (!container || !totalDiv || !subtotalDiv) return;

    container.innerHTML = "";
    let subtotal = 0;
    const shipping = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align: center; padding: 20px; font-size: 1.1em;'>Your cart is empty! <a href='index.html'>Start shopping now.</a></p>";
        totalDiv.innerText = "₹0";
        subtotalDiv.innerText = "₹0";
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-price">₹${item.price.toLocaleString()}</p>
                    <p class="quantity">Quantity: ${item.quantity}</p>
                    <button onclick="removeItem(${index})"><i class="fas fa-trash"></i> Remove</button>
                </div>
                <div class="item-total">
                    <strong>₹${itemTotal.toLocaleString()}</strong>
                </div>
            </div>`;
    });
    
    const total = subtotal + shipping;

    subtotalDiv.innerText = `₹${subtotal.toLocaleString()}`;
    totalDiv.innerText = `₹${total.toLocaleString()}`;
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order Placed! Thank you for your purchase from Mobile Hub. You will be redirected to the payment page.");
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
}

function searchProducts() {
    const value = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(value));
    renderProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount(); 
    
    if (document.getElementById("product-container")) renderProducts();
    if (document.getElementById("cart-items")) renderCart();
});