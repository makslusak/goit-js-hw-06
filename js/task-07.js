const refs = {
    fontSizeControler: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

refs.fontSizeControler.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
