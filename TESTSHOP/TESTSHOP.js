const products = [
    {
        id: 1,
        name: 'Mug',
        price: 19.99,
        image: 'TESTSHOPPICS/InfinityMug.jpg',
    },
    {
        id: 2,
        name: 'Shirt',
        price: 29.99,
        image: 'TESTSHOPPICS/tshirt.png',
    },
    {
        id: 3,
        name: 'Tote',
        price: 39.99,
        image: 'TESTSHOPPICS/Tote.png',
    },
];

const cart = [];
const itemCounts = {};
let totalCost = 0;

function addToCart(product) {
    if (!itemCounts[product.id]) {
        itemCounts[product.id] = 0;
    }
    cart.push(product);
    itemCounts[product.id]++;
    totalCost += product.price;
    updateCartCount();
}

function renderProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';

    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        productDiv.appendChild(image);

        const name = document.createElement('p');
        name.textContent = product.name;
        productDiv.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;
        productDiv.appendChild(price);

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.classList.add('button');
        button.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(button);

        productsList.appendChild(productDiv);
    });
}



function updateCartPage() {
    // Redirect to the shopping cart page
    window.location.href = 'TESTCART.html';
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

renderProducts();