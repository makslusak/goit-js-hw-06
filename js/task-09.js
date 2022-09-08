// 9 task
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonSwitcherRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const textRef = document.querySelector('.color');

buttonSwitcherRef.addEventListener('click', colorRandomizer);

function colorRandomizer(event) {
    const randomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = randomColor;
    textRef.textContent = randomColor;
}
