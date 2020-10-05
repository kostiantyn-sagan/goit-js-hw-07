const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const input = event.currentTarget;

  const validInputLength = Number(input.dataset.length);

  input.classList.remove('valid');
  input.classList.remove('invalid');

  input.value.length === validInputLength
    ? input.classList.add('valid')
    : input.classList.add('invalid');
}
