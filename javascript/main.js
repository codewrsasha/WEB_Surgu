//Задание 1: Проверка чисел на положительность/отрицательность и четность/нечетность

function checkNumber(number) {

    let sign;

    if(number === 0) { sign = "ноль";

    } else {
        if(number > 0) {sign = "положительное";}
        if(number < 0) {sign = "отрицательное";}

    }

    let even_odd;
    if (number % 2 === 0) {
        even_odd = "четное";
    } else {
        even_odd = "нечетное";
    }

    console.log("Число " + number + " является " + sign + " и " + even_odd + ".");
}

checkNumber(5);
checkNumber(4);
checkNumber(-3);
checkNumber(-2);
checkNumber(0);

//Задание 2: Работа с массивом: Сумма чисел, максимальное число и новый массив с числами  больше 10.

const numbers = [4, 8, 15, 16, 23, 42];
const big_numbers = [];

let sum = 0;
let max_number = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > max_number) {
        max_number = numbers[i];
    }

    if (numbers[i] > 10) {
        big_numbers.push(numbers[i]);
    }
}

console.log('Sum:', sum);
console.log('Max number:', max_number);
console.log('Big numbers:', big_numbers);

//Через методы массивов.
const sumMethod = numbers.reduce((acc, curr) => acc + curr, 0);
const maxMethod = Math.max(...numbers);
const bigNumbersMethod = numbers.filter(num => num > 10);

console.log('Sum (method):', sumMethod);
console.log('Max number (method):', maxMethod);
console.log('Big numbers (method):', bigNumbersMethod);

//Задание 3: Создание массива выводит учеников с оценкой выше заданной и считает среднюю оценку.

const students = [
    { name: "Alex", mark: 5 },
    { name: "Bob", mark: 2 },
    { name: "Charlie", mark: 4 },
    { name: "David", mark: 3 },
    { name: "Eva", mark: 5 },
    { name: "Frank", mark: 4 },
    { name: "Mark", mark: 4 },
    { name: "Sam", mark: 2 },
    { name: "Phillip", mark: 5 },
    { name: "Victor", mark: 3 }
];

function filterAndAverage(students, minMark) {
    const topStudents = students.filter(student => student.mark > minMark);
    console.log("Студенты с оценкой выше " + minMark + ":");
    topStudents.forEach(student => console.log(student.name + " - " + student.mark)); 

    const avg = topStudents.reduce((acc, student) => acc + student.mark, 0) / topStudents.length;
    console.log("Средняя оценка студентов с оценкой выше " + minMark + ": " + avg.toFixed(2));
}

filterAndAverage(students, 2);

// Задание 4: Пользователь угадывает заданное число от 1 до 10. 
// Программа сообщает, больше или меньше введенное число, чем загаданное. 
// После угадывания выводится количество попыток.

function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    console.log("Угадайте число от 1 до 10!");

    while(true) {
        const userInput = prompt("Введите число (или 'exit' для выхода):");
        if (userInput === null || userInput.toLowerCase() === 'exit') {
            console.log("Вы вышли из игры. Загаданное число было: " + secretNumber);
            break;
        } 

        const guess = Number(userInput);

        if (isNaN(guess) || guess < 1 || guess > 10) {
            console.log("Пожалуйста, введите число от 1 до 10.");
            continue;
        }

        attempts++;

        if (guess === secretNumber) {
            console.log("Поздравляем! Вы угадали число " + secretNumber + " за " + attempts + " попыток.");
            break;
        } else if (guess < secretNumber) {
            console.log("Загаданное число больше.");
        } else {
            console.log("Загаданное число меньше.");
        }
    }
}

guessNumber();
