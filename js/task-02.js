// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');
let ingredientsItemsRef = [];

ingredients.forEach(item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listItemRef.classList.add('item');
  ingredientsItemsRef.push(listItemRef);
});

ingredientsListRef.append(...ingredientsItemsRef);
