const slider = document.getElementById("slider");
const value = document.getElementById("value");

// Load saved value
const savedValue = localStorage.getItem("sliderValue");

if (savedValue !== null) {
    slider.value = savedValue;
    value.textContent = savedValue + "%";
} else {
    value.textContent = slider.value + "%";
}

// Update and save value
slider.oninput = function () {
    value.textContent = this.value + "%";
    localStorage.setItem("sliderValue", this.value);
};