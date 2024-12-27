let products = [
    {id: "espresso", img: "../images/expresso.png", name: "Espresso", rating: "4.5", price: "£ 10.50"},
    {id: "cappuccino", img: "../images/cappuccino.png", name: "Cappuccino", rating: "4.5", price: "£ 12.50"},
    {id: "icedcoffee", img: "../images/icedcoffee.png", name: "Iced Coffee", rating: "4.5", price: "£ 16.50"},
    {id: "frappuccino", img: "../images/frappuccino.png", name: "Frappuccino", rating: "4.5", price: "£ 14.50"},
    {id: "americano", img: "../images/americano.png", name: "Americano", rating: "4.5", price: "£ 9.60"},
    {id: "tea", img: "../images/tea.png", name: "Tea", rating: "4.0", price: "£ 8.50"},

    {id: "cookies", img: "../images/cookies.png", name: "Cookies", rating: "4.5", price: "£ 20.60"},
    {id: "cinnamonroll", img: "../images/cinnamonroll.png", name: "Cinnamon Roll", rating: "4.5", price: "£ 7.50"},
    {id: "croissant", img: "../images/criossant.png", name: "Criossant", rating: "4.5", price: "£ 12.85"},

    {id: "lightroast", img: "../images/lightroast.png", name: "Light Roast", rating: "4.5", price: "£ 50.60"},
    {id: "mediumroast", img: "../images/mediumroast.png", name: "Medium Roast", rating: "4.5", price: "£ 44.50"},
    {id: "darkroast", img: "../images/darkroast.png", name: "Dark Roast", rating: "4.5", price: "£ 67.85"},
]

let confirmation = document.getElementById("confirmation");
let confirmationMessage = document.getElementById("confirmation-message")
let n = 0;


for (let i = 0; i < products.length; i++) {
    let button = document.getElementById(products[i].id);
    if (localStorage.getItem(products[i].name) == null) {
        localStorage.setItem(products[i].name, 0);
    }
    if (button) {
        button.addEventListener('click', () => {
            n++;
            let value = parseInt(localStorage.getItem(products[i].name));
            localStorage.setItem(products[i].name, String(1 + value));
            confirmation.style.display = "block";  
            confirmationMessage.innerHTML = "Added to Cart: " + String(n);    
        });
    } 
}



let menuButton = document.getElementById("mobileMenuButton");
let mobileMenu = document.getElementById("mobileMenu");
menuButton.addEventListener("click", () => {
    if (mobileMenu.style.display == "none") {
        mobileMenu.style.display = "flex";
    }
    else {
        mobileMenu.style.display = "none";
    }
})