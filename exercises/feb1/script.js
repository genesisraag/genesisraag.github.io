let pos = 0;

const colorSquare = () => {
    document.getElementById("square").classList.add("rainbow");
};

const moveDown = () => {
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {
    const color = document.getElementById("txt-color").value;
    const root = document.querySelector(":root");
    

    const playground = document.getElementById("circle-playground");
    //playground.innerHTML += "<section class='circle'></section>";
    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);
    ball.style.background = color;
};

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;