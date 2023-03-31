{
    const welcome = () => {
        console.log("Witaj developerze");
    }

    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const backgroundColorElement = document.querySelector(".js-backgroundColor");
    
        bodyElement.classList.toggle("body--dark");
        backgroundColorElement.innerText = bodyElement.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    }

    init();

}