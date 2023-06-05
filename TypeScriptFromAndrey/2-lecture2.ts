
// Типизируем вызовы
let axios = {
    post(url, body) {
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

interface response {
    user: string,
    lastLogin: Date,
    tags: string[]
}

interface objForRequest {
    username: string
}

interface request {
    data: objForRequest
}

//Асинхронная функция, которая возвращает Промис, нужно типизировать промис
// async function getAuth(req: request): Promise<response[]> {
//     const res = (await axios.post('/auth', JSON.stringify(req))).data;
//     return res;
// }

// Generator - 
// 1 - то, что выдаем на выход через yield
// 2 - то, что выдаем на выход через return
// 3 - то, что подаем на вход через next




// Перегрузка функций
// делаем две функции и назначением им одинаковое название с разными параметрами
type Reserve = {
    (from: Date, to: Date, destination: string): boolean
}

type improvedReserve = {
    (from: Date, to: Date, destination: string): boolean
    (from: Date, destination: string): boolean
}

let reserve: improvedReserve = (from: Date, toOrDestination: Date | string, destination?: string): boolean => {
    return true;
}


// reserve(new Date(), "String");

type add = {
    (x: string, y: string): string
    (x: number, y: number): number
}

// let addF: add = (x, y) => x + y;

// console.log(addF(5, 10))
// console.log(addF('Hello', ' World!'));

// Полиморфизм
// Иногда нам не нужен какой то конкретный тип, мы хотим сделать функцию и типизировать ее так, чтобы она работала с любыми значениями или с несколькими значениями


//Хотим на вход получать массив любых значений, булевые или строки или числа
// Обобщенный тип
// function reverseArray<T>(array: T[]): T[] {
//     return array.reverse();
// }

// function reverseArray<А>(array: T[]): T[] {
//     return array.reverse();
// }


// function reverseArray<string>(array: string[]): string[] {
//     return array.reverse();
// }

// console.log(reverseArray([1, "кря", 3, 4,]));


// второй тип объявление типов функций - здесь определение типов будет происходить автоматически, в зависимости от того, что  мы передали на вход функции, то мы и будем получать
// type reverse = {
//     <T>(array: T[]): T[]
// }

// let reverseFunct: reverse = (array) => array.reverse();

// reverseFunct([10, 10, 13]); // ТП видит, что мы подаем массив чисел, следовательно мы будем также возвращать массив чисел и будем работать с числами
// reverseFunct(['string', 'string', 'string']);

// Здесь мы указываем несколько параметров
function appendToArray<T, U>(array: T[], value: U): (T | U)[] {
    return [...array, value];
}
appendToArray([10, 20, 30], 40);


// Эта запись отличается от той, что выше тем, что здесь заранее нужно указать какие типы мы планируем использовать в дальнейшем
type append<T, U> = {
    (array: T[], value: U): (T | U)[]
}

let appendFunct: append<number, string> = (array, value) => [...array, value];
let sddFunct: append<string, number> = (array, value) => [...array, value];



// Псевдонимы обобщенных типов
// псевдоним для обобщенного типа
type MyArray<T> = Array<T>;

const myArray: MyArray<number> = [1, 2, 3, 4];

// Псевдоним функции

type myFunct<T> = (x: T) => T;

const myFunction: myFunct<number> = (x) => x * 2;

// Псевдоним объекта
type myObject<T> = {
    value: T;
    func: (x: T) => T
}

const myObject: myObject<number> = {
    value: 42,
    func: (x) => x + 10
}



