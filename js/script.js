console.log("Witaj developerze");

let buttonBackground = document.querySelector(".buttonBackground");
let background = document.querySelector(".background");
let motyw = document.querySelector(".motyw")

buttonBackground.addEventListener("click", () => {
    background.classList.toggle("dark");
    motyw.innerText = background.classList.contains("dark") ? "jasny" : "ciemny";
    
});

