
// Объединение и пересечение

interface a {
    key1: string
}

interface b {
    key2: number
}

type join = a & b;

type intersection = a | b;


let firstObj: join = {
    key1: 'sddfsdf',
    key2: 30
}

let secondObj: intersection = {
    key2: 23
}

type sdfsdf = string | number;

//объектные литералы

type sdfsdfsga = 40;
let value: sdfsdfsga = 40;

interface vcxz {
    key1: 'key1'
}

// Оператор ! (для null и undefined, эй чувак Тс я знаю, что я делаю)

let x: string | null = null;
// let y: string = x!; // в этом случае мы уверены, что x не является null, поэтому используем символ !, чтобы указать это TypeScript'у

// Это эквивалентно следующему коду без использования символа !:
let y: string;
if (x !== null) {
    y = x;
}

// Оператор ? - опциональность
interface zxcv {
    key1?: string,
    key2: number
}

let sObj: zxcv = {
    key2: 30,
}
// Сначала указываем обязательные, а потом не обязательные
let n: [number, number?, number?] = [10]

// Расширение интерфейсов
interface x {
    key2: string
    key3: number
    key4: boolean
}

type sdfsdsdff = {
    ke1: string
    key2: number
}
// Синтаксис наследование одинаковый с классами
interface z extends x {
    key5: number[]
}

let ljfsjf: z = {
    key2: 'sdsfd',
    key3: 3424,
    key4: true,
    key5: [1, 3, 4]
}