let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear the cart items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${toRupiah(item.price)}`;
        cartItems.appendChild(li);
    });

    document.getElementById('totalPrice').textContent = toRupiah(totalPrice);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return{
    } else {
        alert("Proceeding to checkout...");
        // Additional checkout logic can be added here
    }
}    alert(`Thank you for your purchase! Your total is $${total.toRupiah(2)}`);
    
    // Clear cart
    cart = [];
    total = 0;
    displayCart();
}
