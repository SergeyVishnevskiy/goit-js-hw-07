// Задание 1
// В HTML есть список категорий ul#categories.
{
  /* <ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>

    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul>; */
}

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.
const ulCategoriesRef = document.querySelectorAll(".item");
console.log(ulCategoriesRef);
const ulCategoriesRefLen = ulCategoriesRef.length;
console.log(`В списке ${ulCategoriesRefLen} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов
// в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

let ul = document.getElementById("categories");
let items = ul.querySelectorAll(".item");

items.forEach((listItem) => {
  let h2 = listItem.querySelector("h2");
  let li = listItem.querySelectorAll("li");

  console.log(
    `Категория: ${h2.textContent}, Количество элементов: ${li.length}`
  );
  //console.log(`Категория: ${h2.innerText}`);
});

// console.log(items); //NodeList(3) [li.item, li.item, li.item]
// console.log(`в списке ${items.length} категории`);

// //*создать div id="root" c с текстом 'Hello world'

// let div = document.createElement('div');
// let body = document.querySelector('body')

// div.setAttribute('id', 'root');
// div.innerText = 'Hello world';
// body.append(div)

// div.style.color = 'red';
// div.style.fontWeight = 800;
// div.style.fontSize = '60px';
// body.style.background = 'green';

// const cart = [
//     { id: 1, title: 'Samsung', qty: 2 },
//     { id: 2, title: 'Sony', qty: 7 },
//     { id: 3, title: 'Nokia', qty: 6 },
//     { id: 4, title: 'Iphone', qty: 7 },
//     { id: 5, title: 'Motorolla', qty: 5 },
// ];

// let ul = document.createElement('ul');
// let div = document.getElementById('root')
// let html = '';

// cart.forEach((item) => {
//    let {id, title, qty} = item
//     html += `<li> id: ${id}, title: ${title}, qty: ${qty} </li>`
// })

// ul.innerHTML = html;
// div.append(ul)

// //______________________________________________
// //let ul = document.querySelectorAll(`ul`)[0].children;
// // console.log(ul.children);
// //console.log(ul);

// // let listArr = [...ul]
// // console.log(listArr);

// //split.revearse.join

// // listArr.forEach((item) => {
// //     console.log(item.innerText);
// //     let str = item.innerText.split(",")
// //     const newStr = str[1].split(":")[1];
// //     console.log(newStr);
// // });
