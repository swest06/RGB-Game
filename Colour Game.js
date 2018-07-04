let numOfSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDisplay = document.querySelector("#colourdisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");
let correct = false;

init();

//Reset Button
resetButton.addEventListener("click", function () {
    reset();
});

function init() {
    setModeBtn();
    setSquareBtn();
    //Sets Colours
    reset();
}

function setModeBtn() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setSquareBtn() {
    for (let i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            correct = this.style.backgroundColor === pickedColour;
            if (correct === true){
                messageDisplay.classList.remove("tryAgain");
                messageDisplay.textContent = "Correct";
                messageDisplay.classList.add("correct");
                resetButton.textContent = "Play Again";
                changeColours(pickedColour);
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.classList.remove("correct");
                messageDisplay.classList.add("tryAgain");
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colours = generateColours(numOfSquares);
    pickedColour = randPick();
    colourDisplay.textContent = pickedColour;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colours";
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function generateColours(num) {
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randColour());
    }
    return arr;
}

function randColour() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randPick() {
    let rand = Math.floor((Math.random() * colours.length));
    return colours[rand];
}

function changeColours(winColour) {
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = winColour;
        h1.style.backgroundColor = winColour;
    }
}