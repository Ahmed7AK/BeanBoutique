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

    {id: "frenchpress", img: "../images/frenchpress.png", name: "French Press", rating: "4.5", price: "£ 80.60"},
    {id: "espressomachine", img: "../images/espressomachine.png", name: "Espresso Machine", rating: "4.5", price: "£ 180.60"},
]

function createItem(imageSrc, name, quantity, price, deleteImageSrc) {

    const itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';

    const itemName = document.createElement('div');
    itemName.className = 'item-name width';

    const itemImage = document.createElement('img');
    itemImage.src = imageSrc;
    itemImage.alt = name;

    const itemNameText = document.createElement('p');
    itemNameText.textContent = name;

    itemName.appendChild(itemImage);
    itemName.appendChild(itemNameText);

    const itemQuantity = document.createElement('p');
    itemQuantity.className = 'item-quantity';
    itemQuantity.textContent = quantity;

    const itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.textContent = price;

    const itemDelete = document.createElement('img');
    itemDelete.className = 'item-delete';
    itemDelete.src = deleteImageSrc;
    itemDelete.alt = 'trash';

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemQuantity);
    itemInfo.appendChild(itemPrice);
    itemInfo.appendChild(itemDelete);

    return itemInfo;
}

let container = document.getElementById('cart');


for (let i = 0; i < products.length; i++) {
    let productAmount = parseInt(localStorage.getItem(products[i].name));
    for (let n = 0; n < productAmount; n++) {
        let newComponent = createItem(
            products[i].img, 
            products[i].name, 
            '1', 
            products[i].price, 
            '../images/trash.png'
        );
        container.appendChild(newComponent);

        let deleteItem = newComponent.lastChild;
        deleteItem.onclick = () => {
            container.removeChild(newComponent);
            localStorage.setItem(products[i].name, parseInt(localStorage.getItem(products[i].name)) - 1);
        }

        let clearCart = document.getElementById("clear-cart");
        clearCart.onclick = () => {
            const cartLabels = document.createElement('div');
            cartLabels.className = 'cart-labels';
        
            const itemLabel = document.createElement('p');
            itemLabel.className = 'width';
            itemLabel.textContent = 'Item';
        
            const quantityLabel = document.createElement('p');
            quantityLabel.textContent = 'Quantity';
        
            const priceLabel = document.createElement('p');
            priceLabel.textContent = 'Price';
        
            const deleteLabel = document.createElement('p');
            deleteLabel.textContent = 'Delete';
        
            cartLabels.appendChild(itemLabel);
            cartLabels.appendChild(quantityLabel);
            cartLabels.appendChild(priceLabel);
            cartLabels.appendChild(deleteLabel);
    
            container.innerHTML = "";
            container.appendChild(cartLabels);
            localStorage.setItem(products[i].name, 0);
        }
    }

}




