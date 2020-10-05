const categoriesEl = document.querySelector('#categories');

const countsCategories = list =>
  console.log(`В списке ${list.children.length} категории.`);

const categoriesList = [...categoriesEl.children];

const getCategoriesInfo = categories => {
  const categoriesInfo = categories.reduce(
    (info, category) =>
      info +
      `Категория: ${category.firstElementChild.textContent}
Количество элементов: ${category.lastElementChild.children.length}
`,
    ``,
  );
  console.log(categoriesInfo);
};

countsCategories(categoriesEl);

getCategoriesInfo(categoriesList);
