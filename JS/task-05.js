// Задание 5
//======================decision=================\\
const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");
inputNameRef.addEventListener("input", (event) => {
  event.target.value === ""
    ? (outputNameRef.textContent = "незнакомец")
    : (outputNameRef.textContent = event.target.value);
});
//================================================\\

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
