let intervalId;
let ballPosition = 0;
let movingUp = true;
const ball = document.getElementById("soccerBall");
const startButton = document.getElementById("startButton");
const yogaImages = document.querySelectorAll('.column.yoga-fun .yoga-image');
const imageDescriptions = document.querySelectorAll('.column.yoga-fun .yoga-image .imageDescription');




const startBouncing = () => {
    intervalId = setInterval(() => {
        if (movingUp) {
            ballPosition -= 2;
        } else {
            ballPosition += 2;
        }

        ball.style.top = ballPosition + "%";

        if (ballPosition <=0) {
            movingUp = false;
        } else if (ballPosition >= 80) {
            movingUp = true;
        }
    }, 50);

    

    
    
};

const stopBouncing = () => {
    clearInterval(intervalId);
}; 

const displayImageDescription = (index) => {
    for (let j = 0; j < imageDescriptions.length; j++) {
        imageDescriptions[j].style.display = "none";
    }

    imageDescriptions[index].style.display = "block";
};

for (let i = 0; i < yogaImages.length; i++) {
    yogaImages[i].onclick = () => {
        displayImageDescription(i);
    }
}

document.getElementById("startButton").onclick = () => {
    if (startButton.innerHTML === "Start") {
        startButton.innerHTML = "Stop";
        startBouncing();
    } else {
        startButton.innerHTML = "Start";
        stopBouncing();
    }
};

