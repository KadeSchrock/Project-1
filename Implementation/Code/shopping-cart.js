var productsList = [{
    id: 1,
    name: "BlazeBoard MKI",
    price: 499.99,
    image: "snowboard-design-one.jpg",
    stock: 32
}, {
    id: 2,
    name: "BlazeBoard MKII",
    price: 499.99,
    image: "snowboard-design-two.jpg",
    stock: 20
}, {
    id: 3,
    name: "BlazeBoard MKIII",
    price: 499.99,
    image: "snowboard-design-three.jpg",
    stock: 36
}];
var cart = { total: 0 }
let jsonString;

window.onload = function () {
    if (sessionStorage.hasOwnProperty("cart")) {
        // retrieve cart object from session storage
        var cartValue = sessionStorage.getItem("cart");
        cart = JSON.parse(cartValue);
        // get specific cart elements
        var cartTotal = document.getElementById("cart-total");
        var element = document.getElementById("cart-nav");
        if (Object.keys(cart).length > 1) {
            for (key in cart) {
                if (key != "total") {
                    var product = productsList[key];
                    // create item card
                    var newElement = `<li id="product-${product.id}"><div class="col s12 m7"><div class="card horizontal center-align"><div class="card-stacked"><div class="card-content"><div class="card-image"><img src="${product.image}" id="center"></div><div id="card-text-content"><p id="product-name">${product.name}</p><p id="price">$${product.price}</p></div><label for="quantity-${product.id}">Quantity:</label>&ensp;<input type="number" name="quantity-${product.id}" id="quantity-${product.id}" value=${cart[key].quantity} min=1 max=${product.stock} onChange="updateItem(productsList[${product.id - 1}])">&ensp;<button onclick="removeItem(productsList[${product.id - 1}])">Remove</button></div></div></div></div></li>`;
                    // display item card
                    element.insertAdjacentHTML('afterend', newElement);
                }
            }
            cartTotal.innerHTML = "Total: $" + cart.total;
        }
    }


}

function addItem(product) {
    var cartTotal = document.getElementById("cart-total");
    var element = document.getElementById("cart-nav");
    const productInCart = document.getElementById(`product-${product.id}`);
    var quantity = document.getElementById(`quantity-${product.id}`);
    if (productInCart) {
        // adjust quantity
        quantity.value = quantity.value * 1 + 1;
        cart[product.id].quantity += 1;
        // add to total
        cart.total += product.price;
        // display total
        cartTotal.innerHTML = "Total: $" + cart.total;
    } else {
        // create item card
        var newElement = `<li id="product-${product.id}"><div class="col s12 m7"><div class="card horizontal center-align"><div class="card-stacked"><div class="card-content"><div class="card-image"><img src="${product.image}" id="center"></div><div id="card-text-content"><p id="product-name">${product.name}</p><p id="price">$${product.price}</p></div><label for="quantity-${product.id}">Quantity:</label>&ensp;<input type="number" name="quantity-${product.id}" id="quantity-${product.id}" value=1 min=1 max=${product.stock} onChange="updateItem(productsList[${product.id - 1}])">&ensp;<button onclick="removeItem(productsList[${product.id - 1}])">Remove</button></div></div></div></div></li>`;
        // display item card
        element.insertAdjacentHTML('afterend', newElement);
        // add item to cart
        cart[product.id] = {
            name: product.name,
            price: product.price,
            quantity: 1
        };
        // adjust total
        cart.total += product.price;
        // display total
        cartTotal.innerHTML = "Total: $" + cart.total;
    }
    jsonString = JSON.stringify(cart);
    sessionStorage.setItem("cart", jsonString);
}


function removeItem(product) {
    var cartTotal = document.getElementById("cart-total");
    // remove item card
    const element = document.getElementById(`product-${product.id}`);
    element.remove();
    // adjust price
    var newPrice = product.price * cart[product.id].quantity;
    var roundedPrice = Math.round(newPrice * 100) / 100;
    cart.total -= roundedPrice;
    // remove item from cart
    delete cart[product.id];
    // display total
    cartTotal.innerHTML = "Total: " + cart.total;

    jsonString = JSON.stringify(cart);
    sessionStorage.setItem("cart", jsonString);
}

function updateItem(product) {
    var cartTotal = document.getElementById("cart-total");
    const quantity = document.getElementById(`quantity-${product.id}`).value * 1;

    // if product is more than quantity
    if (cart[product.id].quantity > quantity) {
        var newPrice = product.price * (cart[product.id].quantity - quantity)
        // reduce total
        cart.total -= newPrice;
        cart.total = Math.round(cart.total * 100) / 100
    } else {
        var newPrice = product.price * (quantity - cart[product.id].quantity);
        // else increase total
        cart.total += newPrice;
        cart.total = Math.round(cart.total * 100) / 100
    }
    // update product quantity
    cart[product.id].quantity = quantity;

    // display total
    cartTotal.innerHTML = "Total: " + cart.total;

    jsonString = JSON.stringify(cart);
    sessionStorage.setItem("cart", jsonString);
}