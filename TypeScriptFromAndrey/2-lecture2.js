// Типизируем вызовы
var axios = {
    post: function (url, body) {
        console.log(url);
        console.log(body);
        return {
            data: [
                {
                    user: "Andrey",
                    lastLogin: new Date(),
                    tags: [
                        "genius",
                        "teamlead",
                        "playboy",
                        "philanthropist"
                    ]
                }
            ]
        };
    }
};
var reserve = function (from, toOrDestination, destination) {
    return true;
};
// let addF: add = (x, y) => x + y;
// console.log(addF(5, 10))
// console.log(addF('Hello', ' World!'));
// Полиморфизм
// Иногда нам не нужен какой то конкретный тип, мы хотим сделать функцию и типизировать ее так, чтобы она работала с любыми значениями или с несколькими значениями
//Хотим на вход получать массив любых значений, булевые или строки или числа
function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray([1, "кря", 3, 4,]));
// type reverse = {
//     <T>(array: T[]): T[]
// }
// let reverseFunct: reverse = (array) => array.reverse();
// reverseFunct([10, 10, 13]);
// reverseFunct(['string', 'string', 'string']);
// function appendToArray<T, U>(array: T[], value: U): (T | U)[] {
//     return [...array, value];
// }
// appendToArray([10, 20, 30], 40);
// type append<T, U> = {
//     (array: T[], value: U): (T | U)[]
// }
// let appendFunct: append<number, string> = (array, value) => [...array, value];
// let sddFunct: append<string, number> = (array, value) => [...array, value];
// // Псевдонимы обобщенных типов
// // псевдоним для обобщенного типа
// type MyArray<T> = Array<T>;
// const myArray: MyArray<number> = [1, 2, 3, 4];
// // Псевдоним функции
// type myFunct<T> = (x: T) => T;
// const myFunction: myFunct<number> = (x) => x * 2;
// // Псевдоним объекта
// type myObject<T> = {
//     value: T;
//     func: (x: T) => T
// }
// const myObject: myObject<number> = {
//     value: 42,
//     func: (x) => x + 10
// }
