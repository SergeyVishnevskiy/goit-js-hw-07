// Задание 6
//======================decision=================\\
const validationInputRef = document.querySelector("#validation-input");
const inputLength = Number(validationInputRef.getAttribute("data-length"));

function handleInputFocus(event) {
  let inputLen = event.target.value.length;
  if (inputLen < inputLength || inputLen > inputLength) {
    validationInputRef.classList.add("invalid");
  }
  if (inputLen === inputLength) {
    validationInputRef.classList.replace("invalid", "valid");
  }
}
validationInputRef.addEventListener("blur", handleInputFocus);

//================================================\\

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
