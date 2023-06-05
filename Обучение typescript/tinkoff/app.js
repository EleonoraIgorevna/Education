"use strict";
// простые типы
let a = 1;
let b = 2;
// let c: boolean = true;
let c = true;
let d = 5;
let s = 'sdfsdfds';
let e = 123n;
let f = Symbol('a');
// объекты
// let j: object = {
//     b: 'x'
// }
// console.log(j.b);
let k = {
    b: 10,
    c: 'sdfsdf',
    d: true
};
console.log(k.b);
let l = {
    key1: 3,
    key2: 5,
    key3: 10,
    key4: 4324
};
console.log(l.key2);
let newObject = {
    key1: 'sdfdsf'
};
let testObj = {
    key1: 'sdfsdf',
    key2: 30,
    key3: {
        key1: 'sdfsdf'
    }
};
// Массивы
let sdf = [10, 20, 30, 40];
let sdfg = [10, 20, 30];
let sdfgs = [23, 230, 23];
// Кортежи
let sdffs = [10, 20, 30];
let sfassag = [10, 'sdfs', [40]];
let sfasgsdf = [10, { key: 'string' }, [20]];
// null, undefined, void, never
//enum
var payment;
(function (payment) {
    payment["proceed"] = "sdfsdf";
    payment["authorization"] = "sdfsdfds";
    payment["blocked"] = "sdfsdfdsf";
})(payment || (payment = {}));
let newPayment = payment.blocked;
// литеральные типы
let someString = 'someString';
let someNumber = 30;
