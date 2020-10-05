const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameOutputEl.textContent =
    event.currentTarget.value === '' ? 'незнакомец' : event.currentTarget.value;
}
