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

const paymentMethod = document.getElementById('payment-method');
const cardDetails = document.getElementById('card-details');

paymentMethod.addEventListener('change', () => {
    if (paymentMethod.value === 'card') {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
});

let placeOrder = document.getElementById("place-order");
let paymentContainer = document.getElementById("payment-container");
let paymentConfirmed = document.getElementById("payment-confirmed");
placeOrder.addEventListener("click", () => {
    paymentContainer.style.display = "none";
    paymentConfirmed.style.display = "flex";
})