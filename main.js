window.onload = () => {
    setIconHoverEffects();
    showContact();
    selectSkill();
    setPercentage();
    manageHeader();
    pageSelector();
    /* alert(detectMob()); */
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

function showContact() {
    const button = document.querySelector('button.contactInfo');
    const contactInfo = document.querySelector('.contact__info');
    button.addEventListener('click', () => {
        contactInfo.classList.add('active');
    })
}

let currentCategory = 0;
function selectSkill() {
    const buttons = document.querySelectorAll('.skill_button');
    const contents = document.querySelectorAll('.skiil__content');
    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            if (!(currentCategory == index)) {
                contents[currentCategory].classList.remove('active');
                contents[index].classList.add('active');
                buttons[currentCategory].classList.remove('active');
                buttons[index].classList.add('active');
                currentCategory = index;
            }
        })
    })
}

function setPercentage() {
    const elms = document.querySelectorAll('.web__item__percent');
    const percentages = [100, 100, 100, 80, 90, 70, 50];
    elms.forEach((element, index) => {
        const percentage = percentages[index] + "%";
        element.style.width = percentage;
    })
}

let currentScrollY = 0;
function manageHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', (e) => {
        const scrollY = e.path[1].scrollY;
        if (scrollY > currentScrollY) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        currentScrollY = scrollY;
    })
}

function pageSelector() {
    const buttons = document.querySelectorAll('.header_categories>button');
    const sections = document.querySelectorAll('section');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            window.scroll({
                top: sections[index + 1].offsetTop-150,
                behavior: 'smooth'
            });
        })
    })
}

/* function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
} */