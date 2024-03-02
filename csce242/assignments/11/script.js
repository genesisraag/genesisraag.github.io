class Tree {
    constructor(title, imageName, description, scientificName, location, height, leafType, barkColor, imageAttribution, imageDescription) {
        this.title = title;
        this.imageName = imageName;
        this.description = description;
        this.scientificName = scientificName;
        this.location = location;
        this.height = height;
        this.leafType = leafType;
        this.barkColor = barkColor;
        this.imageAttribution = imageAttribution;
        this.imageDescription = imageDescription; 
    }
    

    getSection() {
        return `<section class="tree-box" onclick="showModal('${this.title}')">
                  <h2>${this.title}</h2>
                  <img src="images/${this.imageName}" alt="${this.title}">
                  <p>Image by: <a href="${this.imageAttribution}">${this.imageDescription}</a></p>
                </section>`;
    }

    getExpandedSection() {
        const attributionLink = 'https://www.nature.org/';

        return `<section>
                <h2>${this.title}</h2>
                <img src="images/${this.imageName}" alt="${this.title}" width="200">
                <p>Description: ${this.description} Description by: <a href="${attributionLink}" >The Nature Conservancy</a></p>
                <p>Scientific Name: ${this.scientificName}</p>
                <p>Location: ${this.location}</p>
                <p>Height: ${this.height}</p>
                <p>Leaf Type: ${this.leafType}</p>
                <p>Bark Color: ${this.barkColor}</p>
            </section>`;
    }
}

const trees = [
    new Tree(
        "American Basswood",
        "basswood.jpg",
        "\"An attractive shade tree, the American basswood can grow as tall at 60 to 80 feet with a round and lush crown made up of heart-shaped leaves. Its whiteish flowers are typically in bloom by mid-June and fill the summer air with a pleasant fragrance. Basswood is common in deciduous forests throughout the Midwest and makes for a popular yard and boulevard tree because of the benefits it provides for both people and urban wildlife!\"",
        "Tilia americana",
        "North America",
        "30-40 meters",
        "Deciduous",
        "Gray",
        "https://www.treehugger.com/introduction-to-american-basswood-1343337",
        "Treehugger.com"
    ),
    new Tree(
        "American Elm",
        "elm.jpg",
        "\"Although its numbers have been impacted by Dutch elm disease, the American elm can still be found with its tall, arching branches creating a shady place to escape the hot summer sun. You can recognize this tree by its gray, furrowed bark and elliptical green leaves that have toothy edges. In the fall, these leaves turn a yellowish-brown that isn’t quite as ornamental as other species, such as the sugar maple.\"",
        "Ulmus americana",
        "North America",
        "20-25 meters",
        "Deciduous",
        "Gray",
        "https://www.fast-growing-trees.com/products/Princeton-Elm-Tree?variant=29101027590196",
        "Fast Growing Trees"
    ),
    new Tree(
        "Common Hackberry",
        "hackberry.jpg",
        "\"Also known as the northern hackberry and American hackberry, the common hackberry is easily recognizable from a distance by its light gray, warty bark on massive trunks. It is commonly used as a street tree because of its ability to withstand drought and urban environments, and it is among the best trees for wildlife. Their fruits have a raisin-like taste and are relished by birds.\"",
        "Celtis occidentalis",
        "North America",
        "15-25 meters",
        "Deciduous",
        "Gray",
        "https://kasparnursery.com/common-hackberry-occidentalis/",
        "Kaspar Nursery"
    ),
    new Tree(
        "Eastern White Pine",
        "eastern.jpg",
        "\"Found and adored throughout the Great Lakes and Midwest states, Eastern white pines are impressive to look at and soft to the touch. The largest conifer of the upper Midwest forests, white pines can grow as tall as 100 feet and up to more than three feet in diameter. Historically these trees had fallen victim to turn-of-the-century logging, leaving their populations at just a fraction of what they once were in many states. Reforestation efforts are underway, but know that if you plant one in your yard, you’ll need to protect it from deer browsing.\"",
        "Pinus strobus",
        "Eastern North America",
        "30-50 meters",
        "Evergreen",
        "Brown",
        "https://www.coniferousforest.com/eastern-white-pine.htm",
        "Coniferous Forest"
    ),
];

function showModal(title) {
    const tree = trees.find(t => t.title === title);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = tree.getExpandedSection();
    document.getElementById('modal').style.display = 'flex';
}

function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function renderTrees() {
    const column1 = document.getElementById('column-1');
    const column2 = document.getElementById('column-2');
    const column3 = document.getElementById('column-3');
    const column4 = document.getElementById('column-4');

    trees.forEach((tree, index) => {
        const column = index % 4 === 0 ? column1 : index % 4 === 1 ? column2 : index % 4 === 2 ? column3 : column4;
        column.innerHTML += tree.getSection();
    });
}

renderTrees();
