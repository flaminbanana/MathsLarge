const cartItems = document.getElementById('cart-items');
const totalCostElement = document.getElementById('totalCost');

function renderCart() {
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartItems.appendChild(emptyCartMessage);
        totalCostElement.textContent = 'Total Cost: $0.00';
    } else {
        let totalCost = 0;

        cart.forEach((product) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            cartItem.appendChild(image);

            const name = document.createElement('p');
            name.textContent = product.name;
            cartItem.appendChild(name);

            const price = document.createElement('p');
            price.textContent = `$${product.price.toFixed(2)}`;
            cartItem.appendChild(price);

            cartItems.appendChild(cartItem);

            totalCost += product.price;
        });

        totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    }
}

renderCart();

//comment