"use strict";
// базовые/простые типы
// let a: any = 1; //используем, когда вообще не можем предугадать, что прийдет с сервиса
// let b: unknown = 2; //значение мы не знаем и , возможно, оно появится потом
// // let c: boolean = true;
// let c = true;
// let d: number = 3;
// let q: string = "Кря";
// let e: bigint = 123n; //target es2016 не поддерживает bigint
// let f: symbol = Symbol("a");
// объекты
// тут ошибка
// let j: object = {
//     b: "x"
// }
// параметры объекта должны быть прописаны заранее
// let k: {
//     b: number
//     w: string, //???????
//     d: boolean
// } = {
//     b: 2,
//     w: "sunny", //почему именно такой принцип построения запятых ?
//     d: true
// }
// console.log(j.b); //почему у меня тут нет ошибки? свойство b не существует в типе object - any ?
console.log(k.b);
// interface bestObject
// {
//     key2: number | string;
//     key3: someType;
// }
// Правильный
// let testObject1: bestObject = {
//     key1: "2",
//     key2: 2,
//     key3: {
//         name: "John"
//     }
// }
// ?????? почему он все скомпилировал на var 
// Массивы
// Вариант 1
let values1 = [1, 2, 3];
let values2 = [1, 2, 4];
// Искуственно ограничиваем массив только на его чтение, к массиву не смогут применяться методы массива
let values3 = [1, 2, 3];
// Кортежи (в TS появился новый тип кортежи - это массивы  ограниченной длины и может содержат внутри значения разного формата)
let array1 = [10, 20, 30];
let array2 = [1, "2", true, [3, 4]];
let array3 = [1, { key: "KEY" }, [1, 2, 3]];
// null, undefined, void, never
// void - используется для функции, когда мы не предполагаем что то возвращать и это вывод в консоль
// never - когда вообще не можем вернуть значение, например, бесконечный цикл
// Enum - логическая сущность
// Литеральные типы и Enum (enum - также появляется в TS - это некие перечисления )
// enum создает вариативность логики, они больше используются как некие логичные сущности
// можно обращаться как к массиву 0-1-2
// enum payment
// {
//     proceed = "sdfsdf",
//     authorization = "sdfsdfds",
//     blocked = "sdfsdfdsf"
// }
// let newPayment = payment.blocked;
// if (newPayment == payment.blocked) {
// } else { }
// ЛИТЕРАЛЬНЫЕ ТИПЫ
// литеральные типы - переменная имеет строго определенное значение, которое никак нельзя поменять
// у переменной должно быть строго определенное значение
// let someString: 'someString' = 'someString';
// // let someNumber: 30 = 30;
// // Объединение и пересечение
// interface a {
//     key1: string
// }
// interface b {
//     key2: number
// }
// type join = a & b;
// type intersection = a | b;
// let firstObj: join = {
//     key1: 'sddfsdf',
//     key2: 30
// }
// let secondObj: intersection = {
//     key2: 23
// }
// type sdfsdf = string | number;
// //объектные литералы
// type sdfsdfsga = 40;
// interface vcxz {
//     key1: 'key1'
// }
// // Оператор !
// let x: string | null = null;
// // let y: string = x!; // в этом случае мы уверены, что x не является null, поэтому используем символ !, чтобы указать это TypeScript'у
// // Это эквивалентно следующему коду без использования символа !:
// let y: string;
// if (x !== null) {
//     y = x;
// }
// // Оператор ?
// interface zxcv {
//     key1?: string,
//     key2: number
// }
// let sObj: zxcv = {
//     key2: 30,
// }
// let n: [number, number?, number?] = [10]
// interface x {
//     key2: string
//     key3: number
//     key4: boolean
// }
// type sdfsdsdff = {
//     ke1: string
//     key2: number
// }
// interface z extends x {
//     key5: number[]
// }
// let ljfsjf: z = {
//     key2: 'sdsfd',
//     key3: 3424,
//     key4: true,
//     key5: [1, 3, 4]
// }
