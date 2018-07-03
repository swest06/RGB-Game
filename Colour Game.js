let colours = [
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0)",
];


let squares = document.querySelectorAll(".square");
let pickedColour = randColour();
let colourDisplay = document.querySelector("#colourdisplay");
colourDisplay.textContent = pickedColour;
let messageDisplay = document.querySelector("#message")

let correct = false;

for (let i = 0; i < squares.length; i++){
    //add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        correct = this.style.backgroundColor === pickedColour;
        alert(correct);
        if (correct === true){
            messageDisplay.textContent = "Correct";
            changeColours(pickedColour);
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            // if (pickedColour === this.style.backgroundColor) {
            //     alert("correct")
            // }else {
            //     this.style.backgroundColor = "#232323"
        }

    })
}
function randColour() {
    let rand = Math.floor((Math.random() * colours.length));
    return colours[rand];
}

function changeColours(winColour) {
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = winColour;
    }
}