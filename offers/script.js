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