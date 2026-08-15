const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function () {
    question.innerHTML = "YAYYYY! 🥰❤️";
    message.innerHTML = "I knew you would say yes! 💕";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
