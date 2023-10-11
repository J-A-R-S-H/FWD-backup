const catElement = document.querySelector(".cat-images-container")
const catNameCreater = document.querySelector(".cat-name-creator")
const catSelector = document.querySelector(".cat-selector")
const mainCatSlide = document.querySelector(".game-image-output img")
const submitCatName = document.querySelector("form")
const catNameInput = document.querySelector("#cat-name")
const gameBoard = document.querySelector(".gameboard-container")
const grimReaperAppearance = document.querySelector(".grim-reaper-image-output")
const allButtons = document.querySelectorAll("button")


const theCat = {
    hunger: 10,
    thirst: 10,
    love: 10,
}
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


    UpdateDisplayHunger()
    UpdateDisplayThirst()
    UpdateDisplayLove()

    setInterval(() => {
        if (theCat.hunger > 0) {
            theCat.hunger -= 1;
        }

        UpdateDisplayHunger()
        statHunger.textContent = theCat.hunger
    }, 5000)


    setInterval(() => {
        if (theCat.thirst > 0) {
            theCat.thirst -= 1;
        }

        UpdateDisplayThirst()
        statThirst.textContent = theCat.thirst
    }, 4000)


    setInterval(() => {
        if (theCat.love > 0) {
            theCat.love -= 1;
        }

        UpdateDisplayLove()
        statLove.textContent = theCat.love
    }, 2000)


})


const btnFoodPlus = document.querySelector("#btn-food")
const btnWaterPlus = document.querySelector("#btn-water")
const btnPetPlus = document.querySelector("#btn-pet")

const messageLove = document.querySelector("#message-out-love")
const messageThirst = document.querySelector("#message-out-thirst")
const messageHunger = document.querySelector("#message-out-hunger")

const statHunger = document.querySelector("#hunger-out")
const statThirst = document.querySelector("#thirst-out")
const statLove = document.querySelector("#love-out")




console.log(theCat.hunger)

btnFoodPlus.addEventListener("click", () => {
    if (theCat.hunger <= 9) {
        theCat.hunger += 1
    }


    if (theCat.hunger === 10) {
        messageHunger.textContent = "I'm full!"
    }
    else if (theCat.hunger <= 9) {
        messageHunger.textContent = "Yummy! Thanks for the Food!"
    }
    statHunger.textContent = theCat.hunger
    console.log(theCat.hunger)

})


btnWaterPlus.addEventListener("click", () => {
    if (theCat.thirst <= 9) {
        theCat.thirst += 1
    }


    if (theCat.thirst === 10) {
        messageThirst.textContent = "I'm full!"
    }
    else if (theCat.thirst <= 9) {
        messageThirst.textContent = "Ah refreshing! Thanks you!"
    }
    statThirst.textContent = theCat.thirst

})


btnPetPlus.addEventListener("click", () => {
    theCat.love += 1


    messageLove.textContent = "I love you!!! Prrrr!"
    statThirst.textContent = theCat.love

})



function UpdateDisplayHunger() {
    if (theCat.hunger >= 6 && theCat.hunger <= 9) {
        messageHunger.textContent = "They dont feed my tummy the way you do!"
    }
    else if (theCat.hunger === 10) {
        messageHunger.textContent = "I'm full"
    }
    else if (theCat.hunger <= 5 && theCat.hunger >= 1) {
        messageHunger.textContent = "I'm hungry..."
    }
    else if (theCat.hunger === 0) {
        messageHunger.textContent = "I'm dead!!!"
        theCat.hunger = 0
        mainCatSlide.style.display = "none"
        grimReaperAppearance.style.display = "block"
        allButtons.forEach((el) => {
            el.disabled = true
        })
    }
    else if (theCat.hunger >= 10) {
        theCat.hunger = 10
    }
    statHunger.textContent = theCat.hunger
}


function UpdateDisplayThirst() {

    if (theCat.thirst === 10) {
        messageThirst.textContent = "I'm full!"
    }
    else if (theCat.thirst >= 6 && theCat.thirst <= 9) {
        messageThirst.textContent = "I'm thristy..."
        console.log(theCat.thirst)
    }

    else if (theCat.thirst <= 5 && theCat.thirst >= 1) {
        messageThirst.textContent = "I'm thristy..."
    }
    else if (theCat.thirst === 0) {
        messageThirst.textContent = "I'm dead!!!"
        theCat.thirst = 0
        mainCatSlide.style.display = "none"
        grimReaperAppearance.style.display = "block"
        allButtons.forEach((el) => {
            el.disabled = true
        })
    }
    else if (theCat.thirst >= 10) {
        theCat.thirst = 10
    }
    statThirst.textContent = theCat.thirst

    console.log(theCat.thirst)
}


function UpdateDisplayLove() {
    if (theCat.love === 10) {
        messageLove.textContent = "I'm well loved..."
        console.log(theCat.love)
    }
    else if (theCat.love <= 9 && theCat.love >= 7) {
        messageLove.textContent = "I'm need some loved..."
    }

    else if (theCat.love <= 6 && theCat.love >= 4) {
        messageLove.textContent = "I feel unloved, please pet me..."
    }

    else if (theCat.love <= 3 && theCat.love >= 1) {
        messageLove.textContent = "I'm going to ignore you"
    }

    else if (theCat.love <= 0) {
        messageLove.textContent = "I'm disowning you"
        theCat.love = 0
    }
    else if (theCat.thirst >= 10) {
        theCat.love = 10
    }
    statLove.textContent = theCat.love
}
