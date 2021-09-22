const blocks = [];
for (let i = 0; i < 5; i++)
    blocks[i] = document.getElementsByClassName("texts")[i];

function changeColor(event) {
    event.target.style.color = "#28196e";
}

function resetColor(event) {
    event.target.style.color = "rgb(143, 142, 255)";
}

for (let i = 0; i < 5; i++) {
    blocks[i].addEventListener("mouseover", changeColor);
    blocks[i].addEventListener("mouseout", resetColor);
}
