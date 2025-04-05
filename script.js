// script.js

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-btn");

    loginButton?.addEventListener("click", () => {
        alert("Redirecting to login page...");
    });

    const playIcons = document.querySelectorAll(".songItemPlay");

    playIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            alert(`Play song index ${index}`);
        });
    });

    const rangeBar = document.getElementById("myProgressBar");

    rangeBar?.addEventListener("input", (e) => {
        console.log("Progress: ", e.target.value);
    });

    document.getElementById("previous")?.addEventListener("click", () => {
        alert("Previous song");
    });

    document.getElementById("next")?.addEventListener("click", () => {
        alert("Next song");
    });

    document.getElementById("masterPlay")?.addEventListener("click", () => {
        alert("Toggle Play/Pause");
    });
});
