// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  btn.style.color ='green';
  btn.innerText ="click please"
  
})

// здесь можете создать EventListener для второй кнопки

document.body.appendChild(clonedBtn);
clonedBtn.classList.add('second-btn')
clonedBtn.style.backgroundColor = '#f7c815';
clonedBtn.innerText = 'не нажимай'

clonedBtn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.style.backgroundColor = 'red';
  clonedBtn.style.color ='black';
  clonedBtn.innerText ="don't touch"
 
})






//  // найдем первую кнопку по id
// const btn = document.getElementById("magic-btn");
// // скопируем ее - получилась вторая кнопка. Ее можно использовать.
// const clonedBtn = btn.cloneNode(true);
// // задали id

// clonedBtn.id = "magic-btn-2";
// clonedBtn.innerText = "Я изменю тебя";
// clonedBtn.style.backgroundColor = "#a78b71";
// clonedBtn.style.color = "white";
// clonedBtn.className = "second-btn";

// btn.addEventListener("click", () => {
//   // добавляем к body склонированную кнопку
//   document.body.append(clonedBtn);
//   // console.log("первый слушатель!");
// });

// // здесь можете создать EventListener для второй кнопки
// clonedBtn.addEventListener("click", () => {
//   btn.style.backgroundColor = "#9c4a1a";
//   btn.style.color = "black";
//   // console.log("второй слушатель!!");
// });

// // console.log("основной блок кода!");

