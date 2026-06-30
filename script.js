const slider = document.getElementById("slider");
const value = document.getElementById("value");

slider.oninput = function () {
    value.textContent = this.value + "%";
};