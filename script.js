console.log("--- Task 6. Variables and Data Types ---");

const fullName = "Касым"; 
let age = 20;          
const isStudent = true;   
let favoriteColor = "Blue"; 

console.log("Full Name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);
console.log("Favorite Color:", favoriteColor, "| Type:", typeof favoriteColor);

favoriteColor = "Green";
console.log("Updated Favorite Color:", favoriteColor);


console.log("\n--- Task 7. Input and a Greeting ---");


const userNamePrompt = prompt("Task 7: Введите ваше имя:");
alert(`Привет, ${userNamePrompt}! Добро пожаловать на страницу.`);

const myGroup = "MT-2502";
const greetingMessage = `Студент: ${userNamePrompt}, Группа: ${myGroup}`;
console.log(greetingMessage);


console.log("\n--- Task 8. Sum and Arithmetic ---");

const input1 = prompt("Task 8: Введите первое число (например, 12):");
const input2 = prompt("Task 8: Введите второе число (например, 5):");

const num1 = Number(input1);
const num2 = Number(input2);


const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;


console.log(`Числа: ${num1} и ${num2}`);
console.log("Sum (Сумма):", sum);
console.log("Difference (Разность):", difference);
console.log("Product (Произведение):", product);
console.log("Quotient (Частное):", quotient);
console.log("Remainder (Остаток от деления):", remainder);


console.log("\n--- Task 9. Strings ---");

const myName = "Касым";

console.log("Длина строки (.length):", myName.length);
console.log("Верхний регистр (.toUpperCase()):", myName.toUpperCase());
console.log("Нижний регистр (.toLowerCase()):", myName.toLowerCase());
console.log("Первые 3 символа (.slice(0, 3)):", myName.slice(0, 3));

const part1 = "Я сдам этот асик";
const part2 = "и Куралай апай поставит мне 100%";
const fullSentence = part1 + " " + part2;
console.log("Объединенное предложение:", fullSentence);


console.log("\n--- Task 10. Increment and Assignment Operators ---");

let counter = 10;
console.log("Начальное значение counter:", counter);

counter++; 
console.log("После ++ :", counter); 

counter--; 
console.log("После -- :", counter); 

counter += 5;
console.log("После += 5 :", counter); 

counter -= 3;
console.log("После -= 3 :", counter);

counter *= 2; 
console.log("После *= 2 :", counter); 

counter /= 4; 
console.log("После /= 4 :", counter); 


console.log("\n--- Task 11. A Calculation from the Lecture ---");

function calculateHumanAge(dogAge) {
    const humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Собачий возраст: ${dogAge} г. -> Человеческий возраст: ${humanAge} лет.`);
}

calculateHumanAge(2); 
calculateHumanAge(5); 


console.log("\n--- Task 12. Functions ---");

function greetUser(name) {
    console.log(`Здравствуйте, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}


console.log("--- Вызовы greetUser ---");
greetUser("Азамат");
greetUser("Арсен");

console.log("\n--- Вызовы calculateSum ---");
const sum1 = calculateSum(10, 20);
const sum2 = calculateSum(7.5, 2.5);
console.log("Сумма (10, 20):", sum1);
console.log("Сумма (7.5, 2.5):", sum2);

console.log("\n--- Вызовы calculateRectangleArea ---");
const area1 = calculateRectangleArea(5, 10);
const area2 = calculateRectangleArea(3.5, 4);
console.log("Площадь прямоугольника (5 x 10):", area1);
console.log("Площадь прямоугольника (3.5 x 4):", area2);