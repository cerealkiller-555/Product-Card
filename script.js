/* cart managment */

products = [
    { name: "Pipore 250G", price: 150 },
    { name: "Sara 1KG", price: 300 },
    { name: "Royale 500G", price: 200 }
];


// Modal management 

function openForm(product) {
    document.getElementById("modal").classList.add("show");
    document.getElementById("overlay").classList.add("show");
    document.getElementById("productName").innerText = "Product: " + product;

}

function closeForm() {
    document.getElementById("modal").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
}

function submitOrder(e) {
    e.preventDefault();
    let formInputs = e.target.querySlectorAll("input");
    // extract data from form inputs and add to cart
    addToCart(formInputs);
    closeForm()
}


let cart = [

]

function addToCart(product) {
    cart.push(product);
    renderCart();
    closeForm();
}


function removeFormCart() {
    document.getElementById("cart").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
    // Remove product from cart array

}



function renderCart() {

}