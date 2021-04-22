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

/* let currentScrollY = 0;
let fired = false;
let currentPage = 0;

function handleScroll() {
    const header = document.querySelector('header');
    const height = window.innerHeight;
    const sections = document.querySelector('section#contact');
    window.addEventListener('scroll', (e) => {
        console.log('scrolled');
        if(!fired){
            fired = true;
            const scrollY = e.path[1].scrollY;
            if(scrollY > currentScrollY){
                goDown();
            }else{
                console.log('up');
            }
            currentScrollY = scrollY;
        }
    })
} */

