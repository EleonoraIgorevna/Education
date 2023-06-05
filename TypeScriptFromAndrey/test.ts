// type func = {
//     <T, U>(arrayOne: T[], value: U): (T | U)[]
//     <T>(array: T[]): T[]
// }

// let reverseFunct: func = (array) => array.reverse();

type appendArray = {
    <MyType, SecondType>(arrayOne: MyType[], value: SecondType): (MyType | SecondType)[]
}

let appendArrayFunc: appendArray = (arrayOne, value) => [...arrayOne, value];


// console.log(appendArrayFunc([1, 2, 3], 456));

const account1 = {
    amount: 1_000_000,
    currency: 'RUB',
    currencySign: '₽',
    locked: false,
};

type customType = typeof account1;


class Account { }
class PremiumAccount extends Account { }
const account = new Account();
const premiumAccount = new PremiumAccount();
// account instanceof Account === true
// account instanceof PremiumAccount === false
// premiumAccount instanceof Account === true
// premiumAccount instanceof PremiumAccount === true


function sumValues<inputs extends number>(inputs: inputs[]): void {
    let sum = 0;
    for (const element of inputs) sum += element;
    console.log(sum);
}

sumValues([1, 2, 3]);




// type quantitySides = {
//     quanitity: number
// }

// type length = {
//     length: number
// }

// type figureObjectType = length & quantitySides;

// let figureObject: figureObjectType = {
//     length: 3,
//     quanitity: 4
// }

// //(Function Expression)
// let Perimeter = <Value extends quantitySides & length>(figure: figureObjectType): void => {
//     console.log(figure.length * figure.quanitity);
// }

// //(Function Declaration) 
// function newPerimeter<Value extends quantitySides & length>(figure: figureObjectType): void {
//     console.log(figure.length * figure.quanitity);
// }


type quantitySides = {
    quantity: number
}

type sidesLength = {
    length: number
}

type figureObjectType = sidesLength & quantitySides;

let figure: figureObjectType = {
    quantity: 4,
    length: 5
}

//(Function Declaration)
function Perimeter<Type extends figureObjectType>(value: figureObjectType): void {
    console.log(value.quantity * value.length);
}

//(Function Expression)
const newPerimeter = <Type extends figureObjectType>(value: figureObjectType): void => {
    console.log(value.quantity * value.length);

}

// Perimeter(figure);
newPerimeter(figure);


//!!!!!!!! Не понятно то, что ниже
// type MyType<T = number, K extends SidesLength = SidesLength> = {
//     target: T
//     type: K
// }


// type MyEvent<T extends HTMLElement = HTMLElement> = {
//     target: T,
//     type: string
// }
