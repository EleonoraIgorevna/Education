// объявление функций

function fibonacci(num: number): number {
    if (num <= 2) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
}

let fibonnaciTwo = function (num: number): number {
    if (num <= 2) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
}

let fibonnaciThree = (num: number): number => num <= 2 ? num : fibonnaciThree(num - 2) + fibonnaciThree(num - 1);

// функции через new не рассматриваем, параметры не типизируются, работа идет со строкой.

console.log(fibonnaciThree(5));


// Опциональные параметры ИДУТ после обязательных

function optionalParams(num: number, str?: string): void | string | number {
    if (str) {
        return str
    } else if (num > 10) {
        return 10;
    } else {
        console.log(num)
    }
}
// Предустановленный параметр
function predifinedParams(num: number, str = 'string'): never {
    let a = 0;
    while (true) { console.log(a) };
}

optionalParams(10, 'hello');
console.log(' ')
optionalParams(10);
// predifinedParams(200);

type callBack = (item: number | string) => void;

// Оставшиеся параметры
function restParams(num: number, ...numbers: number[] | string[]) {
    if (typeof num === 'number') {

    }
    console.log(num);
    console.log(numbers)

    let cbf: callBack = item => console.log(item);
    numbers.forEach((item: number | string): number | string => item)

    //уточнить как прописывать тип функции сразу внутри forEach
}

restParams(10, 30, 50, 80, 100)

// Функции генераторы
// function* newFibonacci(): IterableIterator<number> 
function* newFibonacci() {
    let a = 0
    let b = 1
    while (1) {
        yield a;
        // a = b;
        // b = a + b;
        [a, b] = [b, a + b]
    }
}

let genFibonacci = newFibonacci()

console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());
console.log(genFibonacci.next());


// Сигнатуры вызовов

type funct = (n: number, s: string) => string;

type newFunct = {
    (n: number, s: number): number;
}


let testFunct: funct = (n, s) => {
    return 'hello'
}

