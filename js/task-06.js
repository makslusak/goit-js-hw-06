const inputEl = document.querySelector('#validation-input');

const validLength = Number(inputEl.dataset.length);
inputEl.addEventListener('blur', onInputValid);

function onInputValid(event) {
    if (event.currentTarget.value.length === validLength) {
        return addRemoveClass('valid', 'invalid');
    }
    addRemoveClass('invalid', 'valid');
}
function addRemoveClass(addClass, removeClass) {
    inputEl.classList.remove(removeClass);
    inputEl.classList.add(addClass);
}
