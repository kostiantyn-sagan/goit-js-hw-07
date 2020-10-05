const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeItems = array => {
  return array.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    return itemEl;
  });
};

const items = makeItems(ingredients);

ingredientsEl.append(...items);
