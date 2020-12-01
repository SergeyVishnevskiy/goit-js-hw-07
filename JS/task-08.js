// Задание 8 - дополнительное, выполнять не обязательно
//======================decision=================\\
let count;
const boxRefs = {
  div: document.getElementById("boxes"),
  input: document.querySelector('[type="number"]'),
  renderButton: document.querySelector('button[data-action="render"]'),
  destroyButton: document.querySelector('button[data-action="destroy"]'),
};
boxRefs.input.addEventListener("change", (event) => {
  count = event.target.value;
  return count;
});
boxRefs.renderButton.addEventListener("click", (event) => {
  createBox(count);
});
boxRefs.destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
function createBox(amount = 6) {
  let size = 30;
  let colorBox = document.createElement("div");
  colorBox.style.width = size + "px";
  colorBox.style.height = size + "px";
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    let colorBox = document.createElement("div");
    colorBox.style.width = size + "px";
    colorBox.style.height = size + "px";
    let color = createRgb();
    colorBox.style.backgroundColor = color;
    boxRefs.div.append(colorBox);
  }
}

function createRgb() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
function destroyBoxes() {
  boxRefs.div.innerHTML = "";
  boxRefs.input.value = "";
}

//

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
