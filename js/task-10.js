// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const Refs = {
  boxes: document.querySelector('#boxes'),
  controlsEl: document.querySelector('#controls'),
  counter: document.querySelector('#controls').children[0],
  buttonCreate: document.querySelector('#controls').children[1],
  buttonDestroy: document.querySelector('#controls').children[2]
}

Refs.buttonCreate.addEventListener('click', () => {
  createBoxes(Refs.counter.value);
});
Refs.buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
})

function createBoxes(amount) {
  let totalStr = '';
  let size;
  for (let i = 0; i < amount; i += 1){
    size = i * 10 + 30;
    totalStr += '<div style="width:'+size+'px; height:'+size+'px; background-color:'+getRandomHexColor()+'"> </div>';
  }
  console.log(totalStr);
  Refs.boxes.insertAdjacentHTML('beforeend',totalStr);
}

function destroyBoxes() {
  Refs.boxes.innerHTML='';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
