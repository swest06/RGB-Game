let numOfSquares = 6;
let colours = generateColours(numOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColour = randPick();
let colourDisplay = document.querySelector("#colourdisplay");
colourDisplay.textContent = pickedColour;
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");


let correct = false;

//Easy Button
easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    resetButton.classList.remove("selected");
    numOfSquares = 3;
    colours = generateColours(numOfSquares);
    pickedColour = randPick();
    colourDisplay.textContent = pickedColour;
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }else {
            squares[i].style.display = "none";
        }
    }
});

//Hard Button
hardBtn.addEventListener("click", function () {
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   resetButton.classList.remove("selected");
   numOfSquares = 6;
   colours = generateColours(numOfSquares);
   pickedColour = randPick();
   colourDisplay.textContent = pickedColour;
   for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
   }
});

//Reset Button
resetButton.addEventListener("click", function () {
    colours = generateColours(numOfSquares);
    pickedColour = randPick();
    colourDisplay.textContent = pickedColour;
    for (let i = 0; i < squares.length; i++) {
        //add initial colours to squares
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
});

//Sets Colours
for (let i = 0; i < squares.length; i++){
    //add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        correct = this.style.backgroundColor === pickedColour;
        if (correct === true){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again";
            changeColours(pickedColour);
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            // if (pickedColour === this.style.backgroundColor) {
            //     alert("correct")
            // }else {
            //     this.style.backgroundColor = "#232323"
            //}
        }

    })
}
function generateColours(num) {
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randColour());
        //
    }
    return arr;
}

function randColour() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    let col = "rgb(" + r + ", " + g + ", " + b + ")";
    return col;
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