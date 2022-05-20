// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount
// і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(inputRef.value);
});

destroyBtn.addEventListener('click', () => {
  boxesRef.innerHTML = '';
});

function createBoxes(amount) {
  const boxesCollection = [];

  for (let i = 0; i < amount; i++) {
    const boxRef = document.createElement('div');
    boxRef.style.width = `${30 + 10 * i}px`;
    boxRef.style.height = `${30 + 10 * i}px`;
    boxRef.style.backgroundColor = getRandomHexColor();

    boxesCollection.push(boxRef);
  }

  boxesRef.append(...boxesCollection);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
