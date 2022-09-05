const refs = {
    inputEl: document.querySelector('#validation-input'),
};

const validLength = refs.inputEl.dataset.length;
refs.inputEl.addEventListener('blur', onInputValid);

function onInputValid(event) {
    if (event.currentTarget.value.length == validLength) {
        refs.inputEl.classList.remove('invalid');
        return refs.inputEl.classList.add('valid');
    }
    refs.inputEl.classList.add('invalid');
}
