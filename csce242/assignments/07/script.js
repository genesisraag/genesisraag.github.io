const imageChange = () => {
    const newImage = document.getElementById("new-image");

   newImage.src = "images/image2.jpg";
};

const slide = () => {
    const rotationSlider = document.getElementById("rotation-slider");
    const rotationImage = document.getElementById("rotating-image");

    const rotationValue = rotationSlider.value;

    rotationImage.style.transform = `rotate(${rotationValue}deg)`;
};

document.getElementById("new-image").onclick = imageChange;
document.getElementById("rotation-slider").oninput = slide;

