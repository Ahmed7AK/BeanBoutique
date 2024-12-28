let espressoMachine = document.getElementById("espressomachine");
let frenchPress = document.getElementById("frenchpress");

if (localStorage.getItem("espressomachine") === null) {
    localStorage.setItem("espressomachine", 0);
}
if (localStorage.getItem("frenchpress") === null) {
    localStorage.setItem("frenchpress", 0);
}

espressoMachine.addEventListener("click", () => {
    let value = parseInt(localStorage.getItem("Espresso Machine"));
    localStorage.setItem("Espresso Machine",  String(1 + value));
})

frenchPress.addEventListener("click", () => {
    let value = parseInt(localStorage.getItem("French Press"));
    localStorage.setItem("French Press",  String(1 + value));
})

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