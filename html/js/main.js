// Aqui esta el botón "Load Products" del HTML
const loadProductsButton = document.getElementById("loadProducts");

// Funcion del evento de click en el botón
loadProductsButton.addEventListener("click", function () {

    // Vincular la API usando fetch - jc 
    fetch("https://api.escuelajs.co/api/v1/products")
