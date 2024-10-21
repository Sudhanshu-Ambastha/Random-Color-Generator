let container = document.querySelector(".container");
let copiedColor = ''; // To store the copied color

// Create 30 color-container divs
for(let i = 0; i <= 30; i++){
    let div = document.createElement("div");
    div.classList.add("color-container");
    container.appendChild(div);
}

let colorContainerDiv = document.querySelectorAll(".color-container");

generateShapesAndColors();

// Function to generate random shapes and colors
function generateShapesAndColors() {
    colorContainerDiv.forEach((element) => {
        let newColor = randomColor();
        let shapeType = randomShape();

        element.style.backgroundColor = "#" + newColor;
        element.style.display = "inline-block";
        element.style.height = "75px";
        element.style.width = "75px";
        element.style.margin = "5px";
        element.style.borderRadius = shapeType;
        element.style.textAlign = "center";
        element.style.lineHeight = "75px";
        element.style.color = "#fff";
        
        // Display color name instead of hex code
        let colorName = getColorName(newColor);
        element.innerText = colorName;

        // Add click event to copy color
        element.onclick = () => {
            if (element.innerText === colorName) {  // On click of color name
                navigator.clipboard.writeText("#" + newColor);  // Copy hex code to clipboard
                copiedColor = "#" + newColor;  // Store copied color
                alert("Copied: #" + newColor);  // Notify user
            } else {
                // If hex code or color name was copied, apply it to the clicked element
                element.style.backgroundColor = copiedColor;
                element.innerText = getColorName(copiedColor.replace("#", ""));
            }
        }
    });
}

// Function to generate a random hex color code
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

// Function to randomly assign a shape
function randomShape() {
    let shapes = ["0px","5px","25%","50%"];
    let randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
}

// Simple color name lookup for common colors
function getColorName(hex) {
    const colors = {
        "FFFFFF": "White",
        "000000": "Black",
        "FF0000": "Red",
        "00FF00": "Green",
        "0000FF": "Blue",
        "FFFF00": "Yellow",
        "FFA500": "Orange",
        "800080": "Purple",
        "FFC0CB": "Pink",
        "00FFFF": "Cyan",
        "FF00FF": "Magenta",
        "FFD700": "Gold",
        "FF69B4": "Hot Pink",
        "008080": "Teal",
        "FF4500": "Orange Red",
        "800000": "Maroon",
        "008000": "Green",
        "000080": "Navy",
        "FFA07A": "Light Salmon",
        "FF6347": "Tomato",
        "FFDAB9": "Peach Puff", 
        "FFE4C4": "Bisque",
        "FFE4B5": "Moccasin",
        "FFE4E1": "Misty Rose", 
        // Add more colors if needed
    };
    return colors[hex.toUpperCase()] || "#" + hex;  // Default to hex if no name found
}

//onclick on hex code copy
//onclick on any other div the hex code is applied to that div
//Can show name of color instead of hex code