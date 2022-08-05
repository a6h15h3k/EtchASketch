const resetButton = document.querySelector("#reset");
const resolutionButton = document.querySelector("#resolution");
let canvas = document.querySelector("#canvas");
const body = document.querySelector("body");

let tempDiv2 = document.createElement("div");
let tempDiv3 = document.createElement("div");
let tempDiv1 = document.createElement("div");

tempDiv1.textContent = "hi";

canvas.appendChild(tempDiv1);

resetButton.addEventListener('click', () => {
    reset();
});

resolutionButton.addEventListener('click', () => {
    let pixels = getResolution();
    if (pixels >= 1 && pixels <= 100)
        setResolution(pixels);
    else
        window.alert("You entered an invalid input. Please try again.");
});

//Changes Grid Size as per user input
function setResolution(pixels) {
    console.log(pixels);
}

//Prompts User to input a Resolution between 1 and 100
function getResolution() {
    let pixels = 0;
    pixels = prompt("Please enter a pixel size between 1 and 100", Math.floor(Math.random() * 100 + 1));
    return pixels;
}

//Resets Grid to Default Color
function reset() {
    //Removes div Canvas, Thus clearing Etch-A-Sketch
    console.log("reset");
    body.removeChild(canvas);
    
    //Adds a new Empty Canvas
    let tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "canvas");
    canvas = tempDiv;
    body.appendChild(canvas);
}

//Grid divs change color when your mouse passes over them, 
//leaving a (pixelated) trail through your grid like a pen would
function hover() {
}

/*
let tempDiv2 = document.createElement("div");
let tempDiv3 = document.createElement("div");
let tempDiv1 = document.createElement("div");

tempDiv1.textContent = "hi";

canvas.appendChild(tempDiv1);
*/