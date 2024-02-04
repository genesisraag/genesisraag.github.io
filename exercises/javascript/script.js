const doStuff = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = ("yooo!");
    messageP.classList.add("special");
};

const hideimage = () => {
    document.getElementById("landscape").classList.add("hidden");
};

document.getElementById("btm-click").onclick = doStuff;
document.getElementById("landscape").onclick = hideimage;
