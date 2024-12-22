let modal = document.getElementById("myModal");
window.onload = () => {
    modal.style.display = "block";
}

let closeButon = document.getElementById("closeModal")
closeButon.onclick = () => {
    modal.style.display = "none";
}

let i = 0;
let slideshowImg = document.getElementById("slideshowImg");
let slideshowCaption = document.getElementById("slideshowCaption");
function changeSlide() {
    let images = ["./images/slideshow1.png", "./images/slideshow2.jpg", "./images/slideshow3.jpg"]
    let captions = ["Explore Unique Blends", "Enjoy Delicious Drinks", "High Quality Beans"]

    if (i < 3) {
        slideshowImg.src = images[i];
        slideshowCaption.innerHTML = captions[i];
        if (i == 1) {
            slideshowCaption.style.color = "white";
        } else {
            slideshowCaption.style.color = "black";
        }
        i += 1;
    } 

    else {
        i = 0;
    }

}

setInterval(changeSlide, 3000);

