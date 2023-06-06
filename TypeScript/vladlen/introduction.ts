// https://www.youtube.com/watch?v=nyIpDs2DJ_c 
// https://www.youtube.com/watch?v=w2n5HkUNEv4 
// typescript - это тот же js но со строгой типизаций , создал был майксрософтом
// Для того, чтобы обозначить тип - мы пишем его через двоиточие
// npm install -g typescript
// tsc init - создаем конфигуратор, настраиваем tsc компилятор

function sum(value1: number, value2: number): number
{
    return value1 + value2;
}

console.log(sum(4, 8));

//Union type - использование двух потенциальных типов
type NumberOrString = number | string

function addOne(value1: NumberOrString): NumberOrString
{
    return 1 + Number(value1);
}


interface Person
{
    name: string
    age: number
    cities: string[]
}


let person: Person = {
    name: "Eva",
    age: 28,
    cities: ["Moscow", "Belgorod"]
}


function infiniti(): never
{
    while (true) {
        console.log("Hi");
    }
}

function empty(): void
{
    console.log("This box is empty");
}

// в TS намного удобнее работать с классами
class User
{
    //в класса соддержаться специальные модификаторы, как в обычных ООП языках
    public name: string
    protected weight: number
    private age: number
    // constructor(public name: string)
    // {
    //     this.name = name
    // }
}

//Следующий важный консепт называется Джинерик - он нужен для того, чтобы TS самостоятельно определил с каким типом мы в данный момент работаем и таким образом писали более универсальный код
// T - обобщение
// Ограничиваем Джинерик через extends и пишем с какими типами он будет работать
function half<T extends number | string>(array: T[]): T[]
{
    return array.slice(0, array.length / 2);
}


// TS - это другой язык программирования, а именно это статический и типизированный JS. TS позволяет писать более масштабный код и приложения.
// https://www.typescriptlang.org/
// Динамическая типизация означает, что любой переменной в любой момент мы можем присвоить любое тип и любого формата
// Статичный и типизированный язык проще поддерживать. Ошибка можно отлавливать еще на этапе разработки
