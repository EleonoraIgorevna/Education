"use strict";
// объявление функций
function fibonacci(num) {
    if (num <= 2)
        return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
}
let fibonnaciTwo = function (num) {
    if (num <= 2)
        return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
};
let fibonnaciThree = (num) => num <= 2 ? num : fibonnaciThree(num - 2) + fibonnaciThree(num - 1);
// функции через new не рассматриваем, параметры не типизируются, работа идет со строкой.
console.log(fibonnaciThree(5));
// Опциональные параметры 
function optionalParams(num, str) {
    if (str) {
        return str;
    }
    else if (num > 10) {
        return 10;
    }
    else {
        console.log(num);
    }
}
function predifinedParams(num, str = 'string') {
    let a = 0;
    while (true) {
        console.log(a);
    }
    ;
}
optionalParams(10, 'hello');
console.log(' ');
optionalParams(10);
// predifinedParams(200);
// Оставшиеся параметры
function restParams(num, ...numbers) {
    console.log(num);
    console.log(numbers);
    numbers.forEach(item => console.log(item));
}
restParams(10, 30, 50, 80, 100);
// Функции генераторы
function* newFibonacci() {
    let a = 0;
    let b = 1;
    while (1) {
        yield a;
        // a = b;
        // b = a + b;
        [a, b] = [b, a + b];
    }
}
let genFibonacci = newFibonacci();
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
