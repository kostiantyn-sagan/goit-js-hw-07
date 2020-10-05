const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onControlChange);

function onControlChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
