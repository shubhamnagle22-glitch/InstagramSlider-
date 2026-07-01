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

    // Show percentage
    if (v > 0) {
        value.textContent = "+" + v + "%";
    } else {
        value.textContent = v + "%";
    }

    // Punishments & Rewards
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
            punishment.textContent = "🎥 Say sorry + 50 Squats 🏋️";
            break;

        case -3:
            punishment.textContent = "🎥 Say sorry + 30 Squats 🏋️";
            break;

        case -2:
            punishment.textContent = "🎥 Say sorry + 15 Squats 🏋️";
            break;

        case -1:
            punishment.textContent = "Apologize by saying or writing 🥰";
            break;

        case 0:
            punishment.textContent = "No punishment 🙂";
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

    // Background + slider color
    if (v < 0) {
        document.body.style.backgroundImage = "url('dark.jpg')";
        slider.style.background = "#ff3b30";
    }
    else if (v > 0) {
        document.body.style.backgroundImage = "url('bright.jpg')";
        slider.style.background = "#34c759";
    }
    else {
        document.body.style.backgroundImage = "url('bright.jpg')";
        slider.style.background =
            "linear-gradient(to right, #ff3b30 0%, #ff3b30 50%, #34c759 50%, #34c759 100%)";
    }

    // Remove previous highlights
    document.querySelectorAll(".negative-list div").forEach(item => {
        item.classList.remove("active-negative");
    });

    document.querySelectorAll(".positive-list div").forEach(item => {
        item.classList.remove("active-positive");
    });

    // Highlight current negative value
    if (v < 0) {
        const selected = document.getElementById(v.toString());

        if (selected) {
            selected.classList.add("active-negative");
        }
    }

    // Highlight current positive value
    if (v > 0) {
        const selected = document.getElementById(v.toString());

        if (selected) {
            selected.classList.add("active-positive");
        }
    }
}