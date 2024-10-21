let container = document.querySelector(".container");

for(let i = 0; i <= 30; i++){
    let div = document.createElement("div");
    div.classList.add("color-container");
    container.appendChild(div);
}

let colorContainerDiv = document.querySelectorAll(".color-container");
console.log(colorContainerDiv);

generateColors();

function generateColors(){
    colorContainerDiv.forEach((element) => {
        let newColor = randomColor();
        element.style.backgroundColor = "#" + newColor;
        element.style.display = "inline-block";
        element.style.borderRadius = "5px";
        element.style.height = "75px";
        element.style.width = "75px";
        element.style.margin = "5px";
        element.innerText = "#" + newColor;
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

//onclick on hex code copy
//onclick on any other div the hex code is applied to that div
//Can show name of color instead of hex code