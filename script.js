const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");


yesBtn.addEventListener("click", function () {

    slide1.classList.add("hidden");

    slide2.classList.remove("hidden");

});


noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});
