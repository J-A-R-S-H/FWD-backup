const catElement = document.querySelector(".cat-images-container")
const catNameCreater = document.querySelector(".cat-name-creator")
const catSelector = document.querySelector(".cat-selector")
const mainCatSlide = document.querySelector(".game-image-output")
const submitCatName = document.querySelector("form")
const catNameInput = document.querySelector("#cat-name")
const gameBoard = document.querySelector(".gameboard-container")
let counter = 0

let selectedCat = '';

// catElement.forEach((el) => {
//     const imgEl = document.querySelector("img")

// });

catElement.addEventListener("click", (e) => {

    const src = e.target.getAttribute("src");
    selectedCat = src;

    catSelector.style.display = "none"
    catNameCreater.style.display = "block"
    foo(selectedCat)
})

// submitCatNameBtn.addEventListener("click")


function foo(src) {
    console.log(src)
}

submitCatName.addEventListener("submit", (e) => {
    e.preventDefault();

    const mainCatName = document.querySelector(".cat-name-output h3")
    mainCatName.textContent = catNameInput.value
    catNameCreater.style.display = "none"
    gameBoard.style.display = "block"
})


const btnFoodPlus = document.querySelector("#btn-food-plus")
const btnFoodMinus = document.querySelector("#btn-food-minus")
const btnWaterPlus = document.querySelector("#btn-water-plus")
const btnWaterMinus = document.querySelector("#btn-water-minus")
const btnPetPlus = document.querySelector("#btn-pet-plus")
const btnPetMinus = document.querySelector("#btn-pet-minus")


const theCat = {
    hunger: 10,
    thirst: 10,
    love: 10,
}

btnFoodPlus.addEventListener("click", () => {
    theCat.hunger = 9
})



//hunger --



console.log(catNameInput)


