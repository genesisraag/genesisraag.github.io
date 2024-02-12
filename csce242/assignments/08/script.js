const updateImage = () => {
    const commandInput = document.getElementById("commandInput");
    const commandImage = document.getElementById("commandImage");

    const command = commandInput.value;

    commandImage.src = "images/original.jpg";

    if (command.includes('b')) {
        commandImage.src = "images/birthday.jpg";
    }

    if (command.includes('c')) {
        commandImage.src = "images/clown.jpg";
    }

    if (command.includes('p')) {
        commandImage.src = "images/birthday.jpg";
    }

    if (command.includes('r')) {
        commandImage.src = "images/rain.jpg";
    }

    if (command.includes('s')) {
        commandImage.src = "images/shovel.jpg";
    }

    if (command.includes('w')) {
        commandImage.src = "images/work.jpg";
    }
    
};


const slide = () => {
    const slider = document.getElementById("rotation-slider");
    const rotatingImage = document.getElementById("rotating-image");

   

    const sliderValue = slider.value;

    if (sliderValue < 45) {
        rotatingImage.src = 'images/yoga1.jpg';
    } else if (sliderValue < 90) {
        rotatingImage.src = 'images/yoga2.jpg';
    } else if (sliderValue < 135) {
        rotatingImage.src = 'images/yoga3.jpg';
    } else if (sliderValue < 180) {
        rotatingImage.src = 'images/yoga4.jpg';
    } else if (sliderValue < 225) {
        rotatingImage.src = 'images/yoga5.jpg';
    } else if (sliderValue < 270) {
        rotatingImage.src = 'images/yoga6.jpg';
    } else if (sliderValue < 315) {
        rotatingImage.src = 'images/yoga7.jpg';
    } else {
        rotatingImage.src = 'images/yoga8.jpg';
    }

};

const exercise1 = () => {
    document.getElementById("exercise1Section").style.display = "block";
    document.getElementById("exercise2Section").style.display = "none";
};

const exercise2 = () => {
    document.getElementById("exercise1Section").style.display = "none";
    document.getElementById("exercise2Section").style.display = "block";
};


const toggleMenu = () => {
    const menuItems = document.getElementById("menuItems");
    const toggleArrow = document.getElementById("toggleArrow");

    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
        toggleArrow.innerHTML = "&#9650;"; 
    } else {
        menuItems.style.display = "none";
        toggleArrow.innerHTML = "&#9660;"; 
    }
};

document.getElementById("commandInput").oninput = updateImage;
document.getElementById("rotation-slider").oninput = slide;
document.getElementById("exercise1").onclick = exercise1;
document.getElementById("exercise2").onclick = exercise2;
document.getElementById("toggleExercise1").onclick = exercise1;
document.getElementById("toggleExercise2").onclick = exercise2;