let myString1: string = 'Hello'
console.log(myString1);

let flag: boolean = true
let value1: number = 5
let myString2: string = "Katty"
let myArray: number[] = [1, 2, 3]
// flag = 5 //Ошибка, нельзя переназначить другое значение

//Tuple
let contacts: [string, number] = ["Eva", 28]

//Any
let value3: any = 4;
value3 = "string" //Ошибки не будет

//Never -  при бесконечном цикле или при ошибке , не заканчивается выполнение
// ДОБАВИТЬ В ПРОЕКТ
function error(message): never
{
    throw new Error(message)
}


// Конструкция ,позволяющая создавать свои типы
// Создание алиасов для примитивных типов
type Login = string | number
let login: Login = "e.i.pogorelova"
login = 7889

//null | undefined - но для функции прописывается void