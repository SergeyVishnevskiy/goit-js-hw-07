// Задание 7
//======================decision=================\\
const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
const changesFontSize = (event) =>
  (textRef.style.fontSize = event.currentTarget.value + "px");

fontSizeControlRef.addEventListener("input", changesFontSize);
//================================================\\

//=====variant gradation========\\
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function gradation() {
//   textRef.style.color =
//     "rgb(" +
//     getRandomInt(0, 255) +
//     ", " +
//     getRandomInt(0, 255) +
//     ", " +
//     getRandomInt(0, 255) +
//     ")";
// }
// fontSizeControlRef.addEventListener("input", gradation);
//================================================\\

// Напиши скрипт, который реагирует на изменение значения input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

{
  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */
}
