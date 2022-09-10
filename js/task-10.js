function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    input: document.querySelector("[type='number']"),
    btnCreate: document.querySelector('[data-create]'),
    btnDestroy: document.querySelector('[data-destroy]'),
    div: document.querySelector('#controls'),
    divBoxes: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', onBtnCreateClick);

function onBtnCreateClick() {
    const countInput = refs.input.value;
    createBoxes(countInput);
}

function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();
        refs.divBoxes.append(box);
        size += 10;
    }
    refs.input.value = '';
}

refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
    const countInput = refs.input.value;

    if (!countInput || countInput < 0) {
        refs.divBoxes.innerHTML = '';
        return;
    }

    const quantity = refs.divBoxes.childElementCount;

    for (let i = 0; i < countInput; i++) {
        if (i > quantity - 1) {
            return;
        }
        refs.divBoxes.lastElementChild.remove();
    }
}
