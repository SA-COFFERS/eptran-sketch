const menu = document.querySelector(".open-menu");
const regularHeader = document.querySelector("#regular-header");
const openHeader = document.querySelector("#open-header");
const container = document.querySelector(".container")

const openMenu = () => {
    menu.style.left = '0';
    regularHeader.classList.add('hide');
    openHeader.classList.remove('hide');
    container.classList.add('dark-mode');
}

const closeMenu = () => {
    openHeader.classList.add('hide');
    regularHeader.classList.remove('hide');
    container.classList.remove('dark-mode');
    menu.style.left = '-70%';
}

const changeResolution = () => {
    openHeader.classList.add('hide');
    regularHeader.classList.remove('hide');
    container.classList.remove('dark-mode');
    menu.style.left = '-70%';
}

window.addEventListener("resize", changeResolution)