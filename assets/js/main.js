const userText = document.getElementById("userText");
userText.focus();

const generateText = document.querySelectorAll(".font");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userText = document.getElementById("userText").value;

    for (let i = 0; i < generateText.length; i++) {
        generateText[i].textContent = userText;
    }
});

const btnHide = document.getElementById("fontNames");

btnHide.addEventListener("change", function () {
    const fontNames = document.querySelectorAll(".name");

    for (let i = 0; i < fontNames.length; i++) {
        if (this.checked) {
            fontNames[i].style.display = "none";
        } else {
            fontNames[i].style.display = "block";
        }
    }
});

const fontColor = document.getElementById("fontColor");
const fontColorOptions = fontColor.options;

for(let i = 0; i < fontColorOptions.length; i++) {
    fontColorOptions[i].style.cssText = `
    background-color: #${fontColorOptions[i].value};
    color: #fff;
    `
}

fontColor.addEventListener("change", function () {
    for (let i = 0; i < generateText.length; i++) {
        generateText[i].style.color = "#" + this.value;
    }
});

const btnView = document.querySelectorAll(".view label");

for (let i = 0; i < btnView.length; i++) {
    btnView[i].addEventListener("click", function () {
        const disabledElement = document.getElementsByClassName("disabled");
        disabledElement[0].classList.remove("disabled");
        this.classList.add("disabled");
        this.previousElementSibling.checked = true;

        const fonts = document.querySelector(".fonts");
        fonts.classList.toggle("view-list");
    });
}
