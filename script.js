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

    // Show value
    if (v > 0) {
        value.textContent = "+" + v + "%";
    } else {
        value.textContent = v + "%";
    }

    // Punishments
    switch (v) {

        case -10:
            punishment.textContent = "Block";
            break;

        case -9:
            punishment.textContent = "No physical contact";
            break;

        case -8:
            punishment.textContent = "Distance";
            break;

        case -7:
            punishment.textContent = "Pics on Story";
            break;

        case -6:
            punishment.textContent = "No movies";
            break;

        case -5:
            punishment.textContent = "Snacks Date 😋";
            break;

        case -4:
            punishment.textContent = "🎥 Say sorry + 50 Squats 🏋️‍♂️";
            break;

        case -3:
            punishment.textContent = "🎥 Say sorry + 30 Squats 🏋️‍♂️";
            break;

        case -2:
            punishment.textContent = "🎥 Say sorry + 15 Squats 🏋️‍♂️";
            break;

        case -1:
            punishment.textContent = "Apologize by saying it or writing it 🥰";
            break;

        case 0:
            punishment.textContent = "No punishment";
            break;

        case 1:
            punishment.textContent = "Send a cute selfie 📷";
            break;

        case 2:
            punishment.textContent = "Give a warm hug and kiss ❤️";
            break;

        case 3:
            punishment.textContent = "Buy chocolates 🍫";
            break;

        case 4:
            punishment.textContent = "Take them on a date 🌙";
            break;

        case 5:
            punishment.textContent = "Take a cute photo together 📸";
            break;

        case 6:
            punishment.textContent = "Send a sweet message 💌";
            break;

        case 7:
            punishment.textContent = "Give a 5-minute massage 💆";
            break;

        case 8:
            punishment.textContent = "Write a love note ❤️";
            break;

        case 9:
            punishment.textContent = "Dance together 💃";
            break;

        case 10:
            punishment.textContent = "Unlimited love and make them smile ❤️";
            break;
    }

    // Background image change
    if (v < 0) {
        document.body.style.backgroundImage = "url('dark.jpg')";
    } else {
        document.body.style.backgroundImage = "url('bright.jpg')";
    }
}