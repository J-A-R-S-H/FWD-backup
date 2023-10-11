const catElement = document.querySelector(".cat-images-container")
const catNameCreater = document.querySelector(".cat-name-creator")
const catSelector = document.querySelector(".cat-selector")
const mainCatSlide = document.querySelector(".game-image-output img")
const submitCatName = document.querySelector("form")
const catNameInput = document.querySelector("#cat-name")
const gameBoard = document.querySelector(".gameboard-container")
const grimReaperAppearance = document.querySelector(".grim-reaper-image-output")
const allButtons = document.querySelectorAll("button")
let counter = 0

let selectedCat = '';


catElement.addEventListener("click", (e) => {

    const src = e.target.getAttribute("src");
    selectedCat = src;

    catSelector.style.display = "none"
    catNameCreater.style.display = "block"
    getCatImage(selectedCat)
})



function getCatImage(src) {
    console.log(src)
}

submitCatName.addEventListener("submit", (e) => {
    e.preventDefault();

    const mainCatName = document.querySelector(".cat-name-output h3")
    mainCatName.textContent = catNameInput.value
    catNameCreater.style.display = "none"
    gameBoard.style.display = "block"

    mainCatSlide.src = selectedCat
})


const btnFoodPlus = document.querySelector("#btn-food-plus")
const btnFoodMinus = document.querySelector("#btn-food-minus")
const btnWaterPlus = document.querySelector("#btn-water-plus")
const btnWaterMinus = document.querySelector("#btn-water-minus")
const btnPetPlus = document.querySelector("#btn-pet-plus")
const btnPetMinus = document.querySelector("#btn-pet-minus")

const messageLove = document.querySelector("#message-out-love")
const messageThirst = document.querySelector("#message-out-thirst")
const messageHunger = document.querySelector("#message-out-hunger")

const statHunger = document.querySelector("#hunger-out")
const statThirst = document.querySelector("#thirst-out")
const statLove = document.querySelector("#love-out")

class Cat {
    constructor() {
        hunger: 10;
        thirst: 10;
        love: 10
    }
}

btnFoodPlus.addEventListener("click", () => {
    theCat.hunger += 1
    if (theCat.hunger >= 6 && theCat.hunger <= 9) {
        messageHunger.textContent = "I'm not hungry..."
        statHunger.textContent = theCat.hunger
        console.log(theCat.hunger)
    }
    else if (theCat.hunger <= 5 && theCat.hunger >= 1) {
        messageHunger.textContent = "I'm hungry..."
        statHunger.textContent = theCat.hunger
    }
    else if (theCat.hunger === 0) {
        messageHunger.textContent = "I'm dead!!!"
        statHunger.textContent = theCat.hunger
    }
    else if (theCat.hunger >= 10) {
        theCat.hunger = 10
        statHunger.textContent = theCat.hunger
    }
})

btnFoodMinus.addEventListener("click", () => {
    theCat.hunger -= 1
    if (theCat.hunger >= 6) {
        messageHunger.textContent = "I'm not hungry..."
        statHunger.textContent = theCat.hunger
        console.log(theCat.hunger)
    }
    else if (theCat.hunger <= 5 && theCat.hunger >= 1) {
        messageHunger.textContent = "I'm hungry..."
        statHunger.textContent = theCat.hunger
    }
    else if (theCat.hunger === 0) {
        messageHunger.textContent = "I'm dead!!!"
        statHunger.textContent = theCat.hunger
        theCat.hunger = 0
        mainCatSlide.style.display = "none"
        grimReaperAppearance.style.display = "block"

        allButtons.forEach((el) => {
            el.disabled = true
        })
    }
})


btnWaterPlus.addEventListener("click", () => {
    theCat.thirst += 1
    if (theCat.thirst >= 6 && theCat.thirst <= 9) {
        messageThirst.textContent = "I'm not thristy..."
        statThirst.textContent = theCat.thirst
        console.log(theCat.thirst)
    }
    else if (theCat.thirst <= 5 && theCat.thirst >= 1) {
        messageThirst.textContent = "I'm thristy..."
        statThirst.textContent = theCat.thirst
    }
    else if (theCat.thirst === 0) {
        messageThirst.textContent = "I'm dead!!!"
        statThirst.textContent = theCat.thirst
    }
    if (theCat.thirst >= 10) {
        theCat.thirst = 10
        statThirst.textContent = theCat.thirst
    }
    console.log(theCat.thirst)
})

btnWaterMinus.addEventListener("click", () => {
    theCat.thirst -= 1
    if (theCat.thirst >= 6) {
        messageThirst.textContent = "I'm not thristy..."
        statThirst.textContent = theCat.thirst
        console.log(theCat.thirst)
    }
    else if (theCat.thirst <= 5 && theCat.thirst >= 1) {
        messageThirst.textContent = "I'm thristy..."
        statThirst.textContent = theCat.thirst
    }
    else if (theCat.thirst === 0) {
        messageThirst.textContent = "I'm dead!!!"
        statThirst.textContent = theCat.thirst
        theCat.thirst = 0
        mainCatSlide.style.display = "none"
        grimReaperAppearance.style.display = "block"
        allButtons.forEach((el) => {
            el.disabled = true
        })
    }
})


btnPetPlus.addEventListener("click", () => {
    theCat.love += 1
    if (theCat.love === 10) {
        messageLove.textContent = "I'm well loved..."
        statLove.textContent = theCat.love
        console.log(theCat.love)
    }
    else if (theCat.love <= 9 && theCat.love >= 7) {
        messageLove.textContent = "I'm need some loved..."
        statLove.textContent = theCat.love
    }

    else if (theCat.love <= 6 && theCat.love >= 4) {
        messageLove.textContent = "I feel unloved, please pet me..."
        statLove.textContent = theCat.love
    }

    else if (theCat.love <= 3 && theCat.love >= 1) {
        messageLove.textContent = "I'm going to ignore you"
        statLove.textContent = theCat.love
    }

    else if (theCat.love <= 0) {
        messageLove.textContent = "I'm disowning you"
        statLove.textContent = theCat.love
        theCat.love = 0
    }
    else if (theCat.thirst >= 10) {
        theCat.love = 10
        statLove.textContent = theCat.love
    }

})


btnPetMinus.addEventListener("click", () => {
    if (theCat.love > 0) {
        theCat.love -= 1;
    }
    if (theCat.love === 10) {
        messageLove.textContent = "I'm well loved...";
    } else if (theCat.love <= 9 && theCat.love >= 7) {
        messageLove.textContent = "I need some love...";
    } else if (theCat.love <= 6 && theCat.love >= 4) {
        messageLove.textContent = "I feel unloved, please pet me...";
    } else if (theCat.love <= 3 && theCat.love >= 1) {
        messageLove.textContent = "I'm going to ignore you...";
    } else if (theCat.love === 0) {
        messageLove.textContent = "I'm disowning you";
    }

    statLove.textContent = theCat.love;
    console.log(theCat.love)

})




//hunger --



console.log(catNameInput)

