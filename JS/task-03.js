// Задание 3
//======================decision=================\\
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
//=============reduce===============\\
// const ulRef = document.querySelector("#gallery");
// console.log(ulRef);
// const createLi = images.reduce((acc, imgObj) => {
//   const li = document.createElement("li");
//   li.classList.add("gallery__item");
//   const img = document.createElement("img");
//   img.classList.add("gallery__img");
//   // img.setAtribute("src", img.url);
//   // img.setAtribute("alt", img.alt);
//   img.src = imgObj.url;
//   img.alt = imgObj.alt;
//   li.append(img);
//   acc.push(li);
//   return acc;
// }, []);
// console.dir(createLi);
// ulRef.append(...createLi);
//========================================\\
//=================forEach============\\
// let markUp = "";
// const ulRef = document.querySelector("#gallery");
// console.log(ulRef);
// images.forEach((image) => {
//   markUp += `<li><img src=${image.url} alt=${image.alt}/></li>`;
// });
// ulRef.insertAdjacentHTML("afterbegin", markUp);
//========================================\\
//=================map============\\

const createImg = (images) =>
  `<li><img src="${images.url}" alt="${images.alt}"></li>`;
const itemImg = images.map(createImg).join("");
const galleryRef = document.querySelector("#gallery");
galleryRef.insertAdjacentHTML("afterbegin", itemImg);
//================================================\\

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
