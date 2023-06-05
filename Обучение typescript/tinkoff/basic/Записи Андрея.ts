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

type someType = {
    key1: string
}

let newObject: someType = {
    key1: 'sdfdsf'
}

interface bestObject
{
    key1: string;
}

interface bestObject
{
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

type sfsdf = string | number;

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

enum payment
{
    proceed = "sdfsdf",
    authorization = "sdfsdfds",
    blocked = "sdfsdfdsf"
}

let newPayment = payment.blocked;

// литеральные типы

let someString: 'someString' = 'someString';
let someNumber: 30 = 30;



// Объединение и пересечение

interface a
{
    key1: string
}

interface b
{
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

interface vcxz
{
    key1: 'key1'
}

// Оператор !

let x: string | null = null;
// let y: string = x!; // в этом случае мы уверены, что x не является null, поэтому используем символ !, чтобы указать это TypeScript'у

// Это эквивалентно следующему коду без использования символа !:
let y: string;
if (x !== null) {
    y = x;
}

// Оператор ?
interface zxcv
{
    key1?: string,
    key2: number
}

let sObj: zxcv = {
    key2: 30,
}

let n: [number, number?, number?] = [10]


interface x
{
    key2: string
    key3: number
    key4: boolean
}

type sdfsdsdff = {
    ke1: string
    key2: number
}

interface z extends x
{
    key5: number[]
}

let ljfsjf: z = {
    key2: 'sdsfd',
    key3: 3424,
    key4: true,
    key5: [1, 3, 4]
}