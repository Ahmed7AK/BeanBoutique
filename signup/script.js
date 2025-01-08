let registerButton = document.getElementById("registerButton");
let registrationSuccessful = document.getElementById("registrationSuccessful");

registerButton.addEventListener("click", () => {
    registrationSuccessful.style.display = "block";
})

let closeButton = document.getElementById("closeRegistration");
closeButton.addEventListener("click", () => {
    registrationSuccessful.style.display = "none";
    window.location.href = "../eventsindex.html";
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