// fetch ('https://api.escuelajs.co/api/v1/products/1')
// .then(res => res.json())
// .then(data => console.log(data));

//Variables Iniciales
let shoppingCartArray = [];     // agregado a carrito
let total = 0;
let productContainer = document.getElementById('shop-items');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '887ff174e1mshdcf730a516a9409p1f2489jsn2fc87d8982e0',
		'X-RapidAPI-Host': 'books39.p.rapidapi.com'
	}
};

//Peticion de productos al servidor:

let res = await fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
let data = await res.json()

//Limitamos a 4 producto
let productsArray = data.slice(0, 5) //productos que estan en stock
console.log(productsArray)

// Productos de pantalla



productsArray.forEach(product => {
    productContainer.innerHTML += `
    <div class="shop-item" id="${product.id}">
        <span class="shop-item-title">${product.TITLE}</span>
        <img class="shop-item-image" src="./Images/libro.jpg">
        <p class="shop-item-author">${product.AUTHOR}</p>
        <div class="shop-item-details">
            <span class="shop-item-price">$${product.YEAR}</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>`
});

// Escucho cuando se hace click en un btn ADD
let addBtns = document.querySelectorAll('.shop-item-button');
addBtns = [...addBtns];

let cartContainer = document.querySelector('.cart-items');

addBtns.forEach(btn => {
    btn.addEventListener('click', event=>{
        console.log('click')


        // Agrego productos al carro


        //Buscar Id del producto
        let actualId = parseInt(event.target.parentNode.parentNode.id);
        console.log(actualId);


        //Con el id encontrar el objeto actual
        let actualPrducto = productsArray.find (item => item.id === actualId)
        console.log(actualPrducto)

        // Agregar el producto al arreflo del carro


        cartContainer.innerHTML += `
        <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="./Images/libro.jpg" width="100" height="100">
                    <span class="cart-item-title">${actualPrducto.TITLE}</span>
                </div>
                <span class="cart-price cart-column">$${actualPrducto.YEAR}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" min="1" type="number" value="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
        </div`
    });
});



