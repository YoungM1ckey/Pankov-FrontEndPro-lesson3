//За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let name = prompt("Send your name");

alert(`Hello, ${name}! How are you ?`);

//Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(`
  Результаты:
  Сумма: ${sum}
  Отнимания: ${difference}
  Умножение: ${product}
  Деление: ${quotient}
`);

//  Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
let num3 = parseFloat(prompt("Введите первое число:"));
let num4 = parseFloat(prompt("Введите второе число:"));

if (num3 === num4) {
	alert(true);
} else {
	alert(false);
}

//Визначити середнє арифметичне трьох чисел
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let number3 = parseFloat(prompt("Введите третье число:"));

let average = (number1 + number2 + number3) / 3;

alert(`Среднее арефметическое чисто: ${average}`);

//Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

let numb = prompt("Введите 5-ти значное число:");
// let result = numb.toString().split("");

let result = "";
 result += (numb / 10000 | 0) + " ";
 numb %= 10000;
 
 result += (numb / 1000 | 0) + " ";
 numb %= 1000;

 result += (numb / 100 | 0) + " ";
 numb %= 100;

 result += (numb / 10 | 0) + " ";
 numb %= 10;

 result += numb;

alert(`Результат: ${result}`);


