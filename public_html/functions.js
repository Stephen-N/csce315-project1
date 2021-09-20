function myLightFunction() {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("bg", document.body.style.backgroundColor);
}

function myFunction() {
    document.body.style.backgroundColor = "grey";
    localStorage.setItem("bg", document.body.style.backgroundColor);

}

window.onload = function () {
    document.body.style.backgroundColor = localStorage.getItem("bg");
}