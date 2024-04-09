let body = document.querySelector("body");
let questions = document.querySelectorAll(".section-question");
let answers = document.querySelectorAll("p");
let plusIcons = document.querySelectorAll(".plus");
let minusIcons = document.querySelectorAll(".minus");

let counter = 0;

questions.forEach((val,idx) => {
    val.addEventListener("click", () => {
        answers.forEach((val) => {
            val.classList.add("hide");
        })
        answers[idx].classList.remove("hide");
        minusIcons.forEach((val) => {
            val.classList.add("hide");
        })
        minusIcons[idx].classList.remove("hide");
        plusIcons.forEach((val) => {
            val.classList.remove("hide");
        })
        plusIcons[idx].classList.add("hide");
        counter = idx;
    })
})

 
body.addEventListener("keydown", (evt) => {
    if (evt.key === "ArrowDown") {
        evt.preventDefault();
        if (counter === 3) {
            return;
        }
        answers.forEach((val) => {
            val.classList.add("hide");
        })
        answers[counter+1].classList.remove("hide");
        minusIcons.forEach((val) => {
            val.classList.add("hide");
        })
        minusIcons[counter+1].classList.remove("hide");
        plusIcons.forEach((val) => {
            val.classList.remove("hide");
        })
        plusIcons[counter+1].classList.add("hide");
        counter++;
    }

    if (evt.key === "ArrowUp") {
        evt.preventDefault();
        if(counter=== 0) {
            return;
        }
        answers.forEach((val) => {
            val.classList.add("hide");
        })
        answers[counter-1].classList.remove("hide");
        minusIcons.forEach((val) => {
            val.classList.add("hide");
        })
        minusIcons[counter-1].classList.remove("hide");
        plusIcons.forEach((val) => {
            val.classList.remove("hide");
        })
        plusIcons[counter-1].classList.add("hide");
        counter--;
    }
})