let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfStrings: Array<string> = ["Hello", "Eva"]

function reverse<T>(array: T[]): T[]
{
    return array.reverse()

}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);