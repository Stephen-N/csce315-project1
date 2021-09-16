function myLightFunction() {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("bg", document.body.style.backgroundColor);
}

function myDarkFunction() {
    document.body.style.backgroundColor = "DarkGray";
    localStorage.setItem("bg", document.body.style.backgroundColor);

}

window.onload = function () {
    document.body.style.backgroundColor = localStorage.getItem("bg");
}