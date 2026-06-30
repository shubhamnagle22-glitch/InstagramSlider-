const slider = document.getElementById("slider");
const value = document.getElementById("value");
const punishment = document.getElementById("punishment");

const savedValue = localStorage.getItem("sliderValue");

if (savedValue !== null) {
    slider.value = savedValue;
    updateSlider(savedValue);
} else {
    updateSlider(0);
}

slider.oninput = function () {
    updateSlider(this.value);
    localStorage.setItem("sliderValue", this.value);
};

function updateSlider(v) {

    v = parseInt(v);

    if (v > 0) {
        value.textContent = "+" + v + "%";
    } else {
        value.textContent = v + "%";
    }

    switch (v) {

        case -10:
            punishment.textContent = "punishments";
            break;

        case -9:
            punishment.textContent = "punishments ";
            break;

        case -8:
            punishment.textContent = "punishments";
            break;

        case -7:
            punishment.textContent = "punishments";
            break;

        case -6:
            punishment.textContent = "punishments";
            break;

        case -5:
            punishment.textContent = "punishments";
            break;

        case -4:
            punishment.textContent = "punishments";
            break;

        case -3:
            punishment.textContent = "punishments ";
            break;

        case -2:
            punishment.textContent = " punishments ";
            break;

        case -1:
            punishment.textContent = " punishment ";
            break;

        case 0:
            punishment.textContent = "No punishment ";
            break;

        case 1:
            punishment.textContent = "Good";
            break;

        case 2:
            punishment.textContent = "Better";
            break;

        case 3:
            punishment.textContent = "Best";
            break;

        case 4:
            punishment.textContent = "Hugs";
            break;

        case 5:
            punishment.textContent = "Kiss ";
            break;

        case 6:
            punishment.textContent = "compliments";
            break;

        case 7:
            punishment.textContent = "Date";
            break;

        case 8:
            punishment.textContent = "Romance";
            break;

        case 9:
            punishment.textContent = "hearts ";
            break;

        case 10:
            punishment.textContent = "Unlimited love";
            break;
    }
}