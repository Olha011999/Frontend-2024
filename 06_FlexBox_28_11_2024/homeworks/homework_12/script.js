console.log("Hallo");

let names = ["Мария", "Алексей", "Елена", "Дмитрий"];
let age = [22, 31, 45, 53];
let info = [];
for (let i = 0; i < names.length; i++) {
  info.push(names[i] + " " + age[i] + " лет/год(а)");
}
console.log(info);

let reverseInfo = info.reverse();
console.log(reverseInfo);

// Или   //Три точки ( ...) в JavaScript pаспаковывает (копирует) все элементы массива в новый массив, чтобы не изменить исходный массив.
// let reverseInfo = [...info].reverse();
// console.log(reverseInfo)

let countries = [];
countries.push("Франция", "Германия", "Италия");
let deletedCountry = countries.pop();
countries.unshift(deletedCountry);

console.log(countries);

let numbers = [1, 2, 3, 4, 5];

let num = [];
for (let i = 0; i < numbers.length; i++) {
  num.push(numbers[i] * 2);
}

console.log("----------------");
let num1 = [];
for (let i = 0; i < numbers.length; i++) {
  num1.push(numbers[i] ** 2);
}

console.log("Исходный массив:", numbers);
console.log("Умножили каждый элемент на 2:", num);
console.log("Квадрат каждого элемента:", num1);
