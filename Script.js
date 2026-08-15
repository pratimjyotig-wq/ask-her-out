const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");
const message = document.getElementById("message");


// YES BUTTON
yesBtn.addEventListener("click", function () {

    question.innerHTML = "YAYYY! 🥰❤️";

    message.innerHTML =
        "I knew you would say yes! 💕";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

});


// NO BUTTON
noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});
