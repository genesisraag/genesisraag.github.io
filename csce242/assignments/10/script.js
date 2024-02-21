const advertisements = [
    "The variety with in these images is outstanding",
    "Each image has been edited by our superior staff",
    "Discover the beauty of nature with our stunning visuals",
    "Unlock your creativity with our curated image collection",
    "Transform your projects with the power of captivating visuals",
];
let currentIndex = 0;
const advertisementTextElement = document.getElementById("advertisementText");
const imageArray = {
    "images/garden.jpg": "Image by vecstock on Freepik",
    "images/golden.jpg": "Image by wirestock on Freepik",
    "images/mountain-lake.jpg": "Image by wirestock on Freepik",
    "images/small-house.jpg": "Image by wirestock on Freepik",
    "images/snow.jpg": "Image by wirestock on Freepik"
};

const changeAdvertisement = () => {
    advertisementTextElement.innerHTML = advertisements[currentIndex];
    currentIndex = (currentIndex + 1) % advertisements.length;
};

const displayImages = () => {
    const imageContainer = document.getElementById("image-container");

            for (let imageUrl in imageArray) {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;

                const pElement = document.createElement("p");
                const aElement = document.createElement("a");
                aElement.href = `https://www.freepik.com/free-photo/${imageArray[imageUrl]}#${imageUrl}`;
                aElement.textContent = ` ${imageArray[imageUrl]}`;
                pElement.appendChild(aElement);

                imageContainer.appendChild(imgElement);
                imageContainer.appendChild(pElement);
            }
};
changeAdvertisement();

setInterval(changeAdvertisement, 2000);
displayImages();