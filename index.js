
// cart 

let cart = document.querySelector(".cart");
let cartEmpty = document.querySelector(".cart-empty");
let cartValue = document.querySelector(".cart-value");
let cartFilled = document.querySelector(".cart-filled");
let cartTotal = document.querySelector(".total");
let cartInput = document.querySelector(".cart-input");
let itemTotal = document.querySelector(".item-total");

let checkOut = document.querySelector(".checkout");
let deleteBtn = document.querySelector(".delete");
let multiply = document.querySelector(".multi");

// Menu 
let overLay = document.querySelector(".overlay");
let menuOpen = document.querySelector(".menu_open");
let menuCLose = document.querySelector(".menu_close");
let listMenu = document.querySelector(".list-menu");

// Quntity
let itemValue = document.querySelector(".item-value");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let quntityBtn = document.querySelector(".quntity_btn");

// Images 

let image = document.querySelector(".image");
let imgGallary = document.querySelectorAll(".img-gallary img");
let mobImg = document.querySelector(".mobimg");
let imageLeft = document.querySelector(".image_left");
let imageRight = document.querySelector(".image_right");
let mobImgLightbox = document.querySelector(".lightthumbnail .mobimg");

let lightLeft = document.querySelector(".light-left");
let lightRight = document.querySelector(".light-right");
let closeLight = document.querySelector(".close");
let lightBox = document.querySelector(".light-box");

let currentImg = 1
function nextImg() {
    if (currentImg == 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    mobImg.src = `./images/image-product-${currentImg}.jpg`;
    mobImgLightbox.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImg() {
    if (currentImg == 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    mobImg.src = `./images/image-product-${currentImg}.jpg`;
    mobImgLightbox.src = `./images/image-product-${currentImg}.jpg`;
}

imgGallary.forEach((imgGallary) => {
    imgGallary.addEventListener("click", () => {
        const lastImg = document.querySelectorAll(".selected");
        if (lastImg) {
            lastImg[0].classList.remove("selected");
        }
        imgGallary.classList.add("selected");
        const selectImg = document.querySelector(".selected");
        switch (selectImg.getAttribute("src")) {
            case "./images/image-product-1-thumbnail.jpg":
                mobImg.src = "./images/image-product-1.jpg";
                mobImgLightbox.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                mobImg.src = "./images/image-product-2.jpg";
                mobImgLightbox.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mobImg.src = "./images/image-product-3.jpg";
                mobImgLightbox.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mobImg.src = "./images/image-product-4.jpg";
                mobImgLightbox.src = "./images/image-product-4.jpg";
                break;
        }
    })
});

function lightClose() {
    lightBox.classList.remove("light-active");
}
function lightOpen() {
    lightBox.classList.add("light-active");
}

var number = 0
function plusValue() {
    number++;
    itemValue.innerText = number;
    cartInput.innerText = number;
    multiply.innerText = number;

    let totalvalue = 125.00 * number;
    itemTotal.innerText = `$ ${totalvalue}.00`;
}
function minusValue() {
    if (number > 0) {
        number--
        cartInput.innerText = number;
        itemValue.innerText = number;
        multiply.innerText = number;
    }
}

function emptyCart() {
    if (number <= 0) {

        cartEmpty.classList.toggle("empty-active");
    } else {
        cartEmpty.classList.remove("empty-active");
    }
}
function filledCart() {
    if (number >= 1) {
        cartFilled.classList.toggle("filled-active");
    }
    else {
        cartFilled.classList.remove("filled-active");
    }

}

function deleteItem() {
    number = 0;
    itemValue.innerText = 0;
    cartInput.innerText = 0;
}


function burgerMenu() {
    overLay.style.display = "block";
    menuCLose.style.display = "block";
    listMenu.style.display = "block";

}
function burgerClose() {
    overLay.style.display = "none";
    menuCLose.style.display = "none";
    listMenu.style.display = "none";
}

plus.addEventListener("click", plusValue);
minus.addEventListener("click", minusValue);
cart.addEventListener("click", emptyCart);
cart.addEventListener("click", filledCart);
menuOpen.addEventListener("click", burgerMenu);
menuCLose.addEventListener("click", burgerClose);
deleteBtn.addEventListener("click", deleteItem);

// Images click 
imageRight.addEventListener("click", nextImg);
imageLeft.addEventListener("click", prevImg);
lightLeft.addEventListener("click", prevImg);
lightRight.addEventListener("click", nextImg);
image.addEventListener("click", lightOpen);
closeLight.addEventListener("click", lightClose);

// imgGallary.addEventListener("click", imgChange);