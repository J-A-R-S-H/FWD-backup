const allTshirts = document.querySelectorAll(".th")
const thLinks = document.querySelectorAll(".th a");
const thImages = document.querySelectorAll('.th img');
const topMainImage = document.querySelector(".slide")
const addtoCartBtn = document.querySelector("#btn-add-to-cart")
const changeTextColor = document.querySelector("#selected-color-out")


function changeMainShirtColors(currentColor) {
    allTshirts.forEach((el) => {
        const anchorEl = el.querySelector("a");
        //const href = anchorTag.getAttribute("href")
        const imgEl = document.querySelector("img")
        anchorEl.setAttribute('href', `images/t-shirt-${currentColor}-no-model.jpg`);
        imgEl.src = `images/t-shirt-${currentColor}-no-model.jpg`
    });
}

function changeThumbColors(currentColor) {
    allTshirts.forEach((el, index) => {

        const anchorEl = el.querySelector("a");
        //const href = anchorTag.getAttribute("href")
        const imgEl = el.querySelector("img")

        console.log(imgEl)
        if (index === 0) {
            anchorEl.setAttribute('href', `images/t-shirt-${currentColor}-no-model.jpg`);
            imgEl.setAttribute('src', `images/t-shirt-${currentColor}-no-model.jpg`);
            changeTextColor.textContent = currentColor
        }
        else if (index === 1) {
            anchorEl.setAttribute('href', `images/t-shirt-${currentColor}-front.jpg`);
            imgEl.setAttribute('src', `images/t-shirt-${currentColor}-front.jpg`);
            changeTextColor.textContent = currentColor
        }
        else if (index === 2) {
            anchorEl.setAttribute('href', `images/t-shirt-${currentColor}-front.jpg`);
            imgEl.setAttribute('src', `images/t-shirt-${currentColor}-back.jpg`);
            changeTextColor.textContent = currentColor
        }

    });
}

thLinks.forEach((thumbAnchor) => {
    thumbAnchor.addEventListener('click', function () {
        setSrcAndHrefThumb(thumbAnchor);
    });
    thumbAnchor.addEventListener('mouseenter', function () {
        setSrcAndHrefThumb(thumbAnchor);
    });
})

// thumbnailElement.addEventListener("mouseenter", function () {
//     topMainImage.src = this.querySelector('img').src;
//     topMainImage.alt = this.querySelector("img").alt;
//     //topMainImage.alt = this.querySelector("a").getAttribute('href');

// })

// thumbnailElement.addEventListener("click", (event) => {
//     event.preventDefault()
//     topMainImage.src = this.querySelector('img').src;
//     topMainImage.alt = this.querySelector("img").alt;
// });

function setSrcAndHrefThumb(el) {
    topMainImage.src = el.querySelector('img').src;
    topMainImage.alt = el.querySelector('img').alt;
}

const sizeSmall = document.querySelector("#t-shirt-size-small")
const sizeMedium = document.querySelector("#t-shirt-size-medium")
const sizeLarge = document.querySelector("#t-shirt-size-large")


sizeSmall.addEventListener("click", showAddtoCartBtn)
sizeMedium.addEventListener("click", showAddtoCartBtn)
sizeLarge.addEventListener("click", showAddtoCartBtn)


function showAddtoCartBtn() {
    addtoCartBtn.disabled = false

    addtoCartBtn.value = "Add to Cart"
}

const sizeOutput = document.querySelector("#selected-size-out")
const sizeInput = document.querySelectorAll(`input[name="shirt-size"]`)
sizeInput.forEach((sizeText) => {
    sizeText.addEventListener("click", () => {
        sizeOutput.textContent = sizeText.value.toUpperCase()
    })
})


const checkboxColor = document.querySelectorAll(".form-group-color input")

checkboxColor.forEach(colorCheckbox => {
    colorCheckbox.addEventListener('change', (e) => {
        handleChangeColor(e.target.value)
    });
});
function handleChangeColor(currentColor) {
    changeMainShirtColors(currentColor)
    changeThumbColors(currentColor);
    console.log(currentColor)
}



console.log(checkboxColor)
