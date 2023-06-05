
// Задание 1
type appendArrays<T, U, V> = {
    (arrayOne: (T | U | V)[], arrayTwo: (T | U | V)[]): (T | U | V)[]
}

let appendFun: appendArrays<number, string, boolean> = (arrayOne, arrayTwo) => {


    let res: (number | string | boolean)[] = [];

    arrayOne.forEach((item, index) => {

        if (typeof item == typeof arrayTwo[index]) {
            res.push(item);
        }
    }
    )
    return res;

}

appendFun([1, "Кря", true], [1, "Муу", false]);






// Задание 2
type combineArrays<T, U> = {
    (arrayOne: (T)[], arrayTwo: (U)[]): (T | U)[]
}

let combineArray: combineArrays<number, string> = (arrayValues, arrayString) => {

    let res: (number | string)[] = [];
    let res2: (number | string)[] = [];
    let res3: (number | string)[] = [];

    res = arrayValues.sort();
    res2 = arrayString.sort();
    // res3 = res.concat(res2);

    res3 = [res, res2]



    console.log(res3);

    return res3;

}

combineArray([1, 4, 2, 5, 3], ["Ю", "A", "M"]);