// Hello World v1.0
// by: Michael Whyte
// c. 2019


const interBtn = document.getElementById('btn-change-text');

const updateText = document.getElementById('special');

interBtn.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        updateText.innerText += "Hello World"
    }
})
