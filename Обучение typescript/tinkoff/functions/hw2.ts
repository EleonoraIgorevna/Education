
/* Задание 1
Нужно создать файл app.ts, скопировать в него код. 
Далее написать типы для входных данных(массив строк) 
и выходного объекта(объект с количеством вхождений каждой строки).
Также нужно типизировать аргументы и возвращаемое значение функции 
и правильно использовать типы внутри функции при создании объекта.
*/

interface frequenciesObj
{
    [fruit: string]: number
}

type countFunction = {
    (arr: string[]): frequenciesObj
}


let countFreq: countFunction = function (arr)
{
    const frequencies: frequenciesObj = {};
    type callBack = (item: string) => frequenciesObj;

    let countFrequencies: callBack = (item =>
    {
        if (frequencies[item]) {
            frequencies[item]++;
            return frequencies;
        } else {
            frequencies[item] = 1;
            return frequencies;
        }
    });

    arr.forEach(countFrequencies);

    return frequencies;

}

// Пример использования:
const strings: string[] = ["мандариночка", "персик", "яблоко", "банан", "банан", "апельсин", "яблоко", "апельсин", "апельсин"];
const frequencies: frequenciesObj = countFreq(strings);
console.log(frequencies);


/* Задание 2
Создай функцию-генератор, которая генерирует случайные числа в заданном диапазоне, и типизируй её аргументы и возвращаемое значение.
*/


function numberGenerator(min: number, max: number): number
{
    min = Math.ceil(min); // Округление вверх. Округляет аргумент до ближайшего большего целого
    max = Math.floor(max); // Округление вниз. Округляет аргумент до ближайшего меньшего целого.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numberGenerator(3, 9));