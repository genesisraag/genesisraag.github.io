const submitItemForm = (e) => {
    e.preventDefault(); 

    const form = e.target;
    const title = form.elements["title"].value;
    const source = form.elements["source"].value;
    const link = form.elements["link"].value;
    const categories = form.elements["categories"].value;
    const description = form.elements["description"].value;
    const datePublished = form.elements["date_published"].value;

    const newItem = {
        "title": title,
        "source": source,
        "link": link,
        "categories": categories.split(","), 
        "description": description,
        "date_published": datePublished
    };

    const itemList = document.getElementById("item-list");
    const listItem = document.createElement("li");
    listItem.textContent = `Title: ${newItem.title}, Source: ${newItem.source}, Date Published: ${newItem.date_published}`;
    itemList.appendChild(listItem);

    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 2000);

    form.reset();
};

document.getElementById("add-item-form").onsubmit = submitItemForm;
