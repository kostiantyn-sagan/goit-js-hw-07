const refs = {
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onRenderBtnClick() {
  createBoxes(refs.input.value);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const arrayOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = generateRandomRgbColor();
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    arrayOfBoxes.push(boxEl);
  }

  refs.boxes.append(...arrayOfBoxes);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function generateRandomRgbColor() {
  const red = Math.round(Math.random() * (255 - 0) + 0);
  const green = Math.round(Math.random() * (255 - 0) + 0);
  const blue = Math.round(Math.random() * (255 - 0) + 0);

  return `rgb(${red}, ${green}, ${blue})`;
}
