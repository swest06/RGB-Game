let colours = [
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0)",
];


let squares = document.querySelectorAll(".square");
let pickedColour = colours[3];
let colourDisplay = document.querySelector("#colourdisplay");
colourDisplay.textContent = pickedColour;

let correct = false;

for (let i = 0; i < squares.length; i++){
    //add initial colours to squares
    squares[i].style.backgroundColor = colours[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {

        correct = this === pickedColour;
    })
}