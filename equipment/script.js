let espressoMachine = document.getElementById("espressomachine");
let frenchPress = document.getElementById("frenchpress");



espressoMachine.addEventListener("click", () => {
    let value = parseInt(localStorage.getItem("Espresso Machine"));
    localStorage.setItem("Espresso Machine",  String(1 + value));
})

frenchPress.addEventListener("click", () => {
    let value = parseInt(localStorage.getItem("French Press"));
    localStorage.setItem("French Press",  String(1 + value));
})