// Ограниченный полиморфизм
// Ограничения дженериков. Generic Constraints

// function sumArray<T extends number>(arr: T[]): number {
//     let sum = 0;
//     for (const elem of arr) sum += elem;
//     return sum;
// }


type HasSides = {
    numberOfSides: number
}

type SidesLength = {
    sidesLength: number
}

type Square = HasSides & SidesLength;
let square: Square = { numberOfSides: 4, sidesLength: 3 }


let calcPerimeter = <Shape extends HasSides & SidesLength>(s: Shape): number => s.numberOfSides * s.sidesLength;

console.log(calcPerimeter(square));















type MyType<T = number, K extends SidesLength = SidesLength> = {
    target: T
    type: K
}


type MyEvent<T extends HTMLElement = HTMLElement> = {
    target: T,
    type: string
}








