const catElement = document.querySelector(".cat-images-container")
const catNameCreater = document.querySelector(".cat-name-creator")
let storedImageUrl = "";

// catElement.forEach((el) => {
//     const imgEl = document.querySelector("img")

// });

catElement.addEventListener("click", () => {
    const imgElement = catElement.querySelector("img");
    storedImageUrl = imgElement
})

