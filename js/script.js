{
    const welcome = () => {
        console.log("Witaj developerze");
    }

    const toggleBackground = () => {
        const background = document.querySelector(".background");
        const BackgroundColor = document.querySelector(".BackgroundColor")
        background.classList.toggle("dark");
        BackgroundColor.innerText = background.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    }
    init();

}