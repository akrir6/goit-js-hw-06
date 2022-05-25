// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// const ingredientsList = document.querySelector('#ingredients');
// let ingredientsItems = [];

// ingredients.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.textContent = item;
//   listItem.classList.add('item');
//   ingredientsItems.push(listItem);
// });

// ingredientsList.append(...ingredientsItems);


document.querySelector('#ingredients').append(...ingredients.map(item=>{
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  return listItem;
}));
