/*Создать массив, который содержит строки и числа. Проверить, содержит ли массив только строки. Вывети результат в консоль*/

const arr = ['hello', 4, 'hi',];

console.log(arr.every(elem => typeof elem === 'string'));