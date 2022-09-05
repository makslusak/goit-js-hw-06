const refs = {
    inputEl: document.querySelector('#name-input'),
    nameOutputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        return (refs.nameOutputEl.textContent = 'Anonymus');
    }
    refs.nameOutputEl.textContent = event.currentTarget.value;
}
