const logInBtn = document.querySelector(".btn-log-in")
const logOutBtn = document.querySelector(".btn-log-out")
const outputDisplay = document.querySelector("#output")
let handleConfirm = ""


logInBtn.addEventListener("click", () => {
    let name = "";

    while (name === "") {
        name = prompt("Enter your Name");

        if (name === "") {
            alert("Wrong Input. Try again.");
        }
        else if (name === null) {
            alert("You exited")
        }
        else {
            outputDisplay.textContent = "Hello " + name + ". Click the button logout when you're ready!";
            logInBtn.style.display = "none";
            logInBtn.setAttribute("disabled", "disabled");
            logOutBtn.style.display = "block";
            logOutBtn.removeAttribute("disabled");
            logOutBtn.textContent = "Log Out";
        }
    }
});

logOutBtn.addEventListener("click", () => {
    handleConfirm = "Are you sure you want to logout?"
    if (confirm(handleConfirm) == true) {
        handleConfirm = "You pressed OK!";
        logOutBtn.style.display = "none"
        logOutBtn.setAttribute("disabled", "disabled")
        logInBtn.style.display = "block"
        logInBtn.removeAttribute("disabled")
        logInBtn.textContent = "Log In"
    } else {
        handleConfirm = "You canceled!";
    }
    outputDisplay.textContent = handleConfirm
})








