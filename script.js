const body = document.querySelector("body");
let canvas = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset");
const resolutionButton = document.querySelector("#resolution");
const defaultResolution = 3;

let resolution = defaultResolution;
setResolution(resolution);

resetButton.addEventListener('click', () => {
    reset();
    setResolution(resolution);
});

resolutionButton.addEventListener('click', () => {
    let pixels = getResolution();
    if (pixels >= 1 && pixels <= 100)
        setResolution(pixels);
    else
        window.alert("You entered an invalid input. Please try again.");
});

//Changes Grid Size as per user input
function setResolution(input) {
    reset();
    resolution = input;
    for (let i = 1; i <= resolution; i++) {
        canvas.appendChild(createRow(resolution));
    }
}

//Prompts User to input a Resolution between 1 and 100
function getResolution() {
    let input = 0;
    input = prompt("Please enter a pixel size between 1 and 100", Math.floor(Math.random() * 100 + 1));
    return input;
}

//Resets Grid to Default Color
function reset() {
    //Removes div Canvas, Thus clearing Etch-A-Sketch
    body.removeChild(canvas);

    //Adds a new Empty Canvas
    let tempDiv = document.createElement("div");
    tempDiv.setAttribute("id", "canvas");
    canvas = tempDiv;
    body.appendChild(canvas);
}

//Grid divs change color when your mouse passes over them, 
//leaving a (pixelated) trail through your grid like a pen would
function hover(pixel) {
    let defaultColor = "white";
    if(pixel.classList.contains("isBlack")) {
        defaultColor = "black";
    }
    pixel.style.backgroundColor = "grey";
    setTimeout(() => {
        pixel.style.backgroundColor = defaultColor;
    },200);    
}

//Creates a Row Container, sets it's attributes and adds Pixels to it
function createRow() {
    let row = document.createElement("div");
    row.style.flex = "1";
    row.style.border = "2px solid green";
    row.style.flexDirection = "row";

    for (i = 1; i <= resolution; i++) {
        row.appendChild(createPixel());
    }

    return row;
}

//Creates a Pixel Square and sets it's attributes
function createPixel() {
    let pixel = document.createElement("div");
    pixel.setAttribute("id", "pixel");
    pixel.style.flex = "1";
    pixel.textContent = "Yo";
    pixel.style.border = "2px solid red";

    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = "black";
        if(!pixel.classList.contains("isBlack")) {
            pixel.classList.add("isBlack");
        }
    });

    pixel.addEventListener('mouseover', () => {
        hover(pixel);
    });

    return pixel;
}