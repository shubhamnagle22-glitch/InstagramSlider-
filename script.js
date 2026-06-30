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
            punishment.textContent = "10 punishments 💀";
            break;

        case -9:
            punishment.textContent = "9 punishments 😭";
            break;

        case -8:
            punishment.textContent = "8 punishments 😢";
            break;

        case -7:
            punishment.textContent = "7 punishments 😔";
            break;

        case -6:
            punishment.textContent = "6 punishments 🥺";
            break;

        case -5:
            punishment.textContent = "5 punishments 😞";
            break;

        case -4:
            punishment.textContent = "4 punishments 😕";
            break;

        case -3:
            punishment.textContent = "3 punishments 😶";
            break;

        case -2:
            punishment.textContent = "2 punishments 😐";
            break;

        case -1:
            punishment.textContent = "1 punishment 😅";
            break;

        case 0:
            punishment.textContent = "No punishment 🙂";
            break;

        case 1:
            punishment.textContent = "1 chocolate 🍫";
            break;

        case 2:
            punishment.textContent = "2 chocolates 🍫";
            break;

        case 3:
            punishment.textContent = "3 hugs 🤗";
            break;

        case 4:
            punishment.textContent = "4 hugs 🤗";
            break;

        case 5:
            punishment.textContent = "5 compliments 😊";
            break;

        case 6:
            punishment.textContent = "6 compliments 😊";
            break;

        case 7:
            punishment.textContent = "7 kisses 😘";
            break;

        case 8:
            punishment.textContent = "8 kisses 😘";
            break;

        case 9:
            punishment.textContent = "9 hearts ❤️";
            break;

        case 10:
            punishment.textContent = "Unlimited love ❤️";
            break;
    }
}