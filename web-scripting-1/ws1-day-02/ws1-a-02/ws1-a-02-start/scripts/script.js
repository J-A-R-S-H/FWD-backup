const btnStart = document.querySelector("#btn-start");
const instructionsDisplay = document.querySelector("#instructions");
const bigfootPlacement = document.querySelector("#bigfoot");
const forestMain = document.querySelector("#forest");

btnStart.addEventListener("click", () => {
    const forestWidth = forestMain.clientWidth - bigfootPlacement.clientWidth;
    const forestHeight = forestMain.clientHeight - bigfootPlacement.clientHeight;

    let bigFootLeft = Math.floor(Math.random() * forestWidth);
    let bigFootTop = Math.floor(Math.random() * forestHeight);

    bigfootPlacement.style.left = bigFootLeft + "px";
    bigfootPlacement.style.top = bigFootTop + "px";

    alert("Find Bigfoot in the forest and click on him");

    instructionsDisplay.style.display = "none";
    bigfootPlacement.style.display = "block";

    bigfootPlacement.addEventListener("click", findingBigfoot);
});

function findingBigfoot() {
    let foundBigfoot = "Darn, you're good! I didn't expect you to find him. Do you want to try again?";

    if (confirm(foundBigfoot) === true) {
        instructionsDisplay.style.display = "block";
        bigfootPlacement.style.display = "none";
    }
}

console.log("Width: " + forestMain.clientWidth + "px");
console.log("Height: " + forestMain.clientHeight + "px");