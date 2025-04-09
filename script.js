let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    total += productPrice;

    // Update cart display
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear current cart display

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Update total price
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Here you can implement the checkout process
    alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}`);
    
    // Clear cart
    cart = [];
    total = 0;
    displayCart();
}
