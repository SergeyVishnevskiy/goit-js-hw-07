// Задание 4
//======================decision=================\\
let counterValue = 0;
const valueRef = document.querySelector("#value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
//================================================\\

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
