// простые типы
let a: any = 1;
let b: unknown = 2;
// let c: boolean = true;
let c = true;
let d: number = 5;
let s: string = 'sdfsdfds';
let e: bigint = 123n;
let f: symbol = Symbol('a');

// объекты
// пример с ошибкой
// let j: object = {
//     b: 'x'
// }

// console.log(j.b);

let k: {
    b: number
    c: string,
    d: boolean
} = {
    b: 10,
    c: 'sdfsdf',
    d: true
}

console.log(k.b);

let l: {
    [sdf: string]: number
} = {
    key1: 3,
    key2: 5,
    key3: 10,
    key4: 4324
}

console.log(l.key2)

// Обьявление типов для объекта 
type someType = {
    key1: string
}

let newObject: someType = {
    key1: 'sdfdsf'
}





// Еще один способ типизации объекта с возможностью расширения
interface bestObject {
    key1: string;
}

interface bestObject {
    key2: number;
    key3: someType;
}

let testObj: bestObject = {
    key1: 'sdfsdf',
    key2: 30,
    key3: {
        key1: 'sdfsdf'
    }
}

type newType = string | number;

// Массивы

let sdf: Array<number> = [10, 20, 30, 40]
let sdfg: number[] = [10, 20, 30];
let sdfgs: readonly number[] = [23, 230, 23];

// Кортежи

let sdffs: [number, number, number] = [10, 20, 30];
let sfassag: [number, string, number[]] = [10, 'sdfs', [40]]
let sfasgsdf: readonly [number, { key: string }, number[]] = [10, { key: 'string' }, [20]]


// null, undefined, void, never

//enum

enum payment {
    proceed = "sdfsdf",
    authorization = "sdfsdfds",
    blocked = "sdfsdfdsf"
}

let newPayment = payment.blocked;
// удобно для if - else 
// литеральные типы - переменная имеет строго определенное значение

let someString: 'someString' = 'someString';
let someNumber: 30 = 30;


