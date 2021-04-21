window.onload = () => {
    setIconHoverEffects();
}

function setIconHoverEffects() {
    const links = document.querySelectorAll('.leftBar__icons>a');
    const fileNames = ['github', 'facebook', 'gmail'];

    links.forEach((element, index) => {
        element.style.backgroundImage = `url("./imgs/${fileNames[index]}_white.png")`;

        element.addEventListener('mouseover', () => {
            element.style.backgroundImage = `url("./imgs/${fileNames[index]}_theme.png")`;
        })

        element.addEventListener('mouseout', () => {
            element.style.backgroundImage = `url("./imgs/${fileNames[index]}_white.png")`;
        })
    })
}