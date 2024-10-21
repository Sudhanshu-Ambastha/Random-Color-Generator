let container = document.querySelector(".container");

for(let i = 0; i <= 30; i++){
    let div = document.createElement("div");
    div.classList.add("color-container");
    container.appendChild(div);
}

let colorContainerDiv = document.querySelectorAll(".color-container");
console.log(colorContainerDiv);

generateShapesAndColors();

function generateShapesAndColors() {
    colorContainerDiv.forEach((element) => {
        let newColor = randomColor();
        let shapeType = randomShape();

        element.style.backgroundColor = "#" + newColor;
        element.style.display = "inline-block";
        element.style.height = "75px";
        element.style.width = "75px";
        element.style.margin = "5px";
        element.style.borderRadius = shapeType; // Random shape
        element.innerText = "#" + newColor;
        element.style.textAlign = "center";
        element.style.lineHeight = "75px"; // Center the text vertically
        element.style.color = "#fff"; // Make the text readable on any background
    });
}

function randomColor(){
    let letters = '0123456789ABCDEF';
    let colorCode = "";
    let colorCodeLength = 6;
    for(let i = 0; i < colorCodeLength; i++){
        let randomIndex = Math.floor(Math.random() * letters.length);  
        colorCode += letters[randomIndex];  
    }
    return colorCode;
}

function randomShape() {
    // Randomly return "0px" for square, "5px" for rounded square, or "50%" for circle
    let shapes = ["0px", "5px", "50%"];
    let randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
}


//onclick on hex code copy
//onclick on any other div the hex code is applied to that div
//Can show name of color instead of hex code