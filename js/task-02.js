const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const adList = document.querySelector('#ingredients');
const elements = ingredients.map((option) => {
const list = document.createElement('li');
list.classList.add('item');
list.textContent = option;
return list;
})
adList.append(...elements);