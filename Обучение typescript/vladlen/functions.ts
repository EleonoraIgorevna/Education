
/////////////////////////////////////////////////////////////

function add(a: number, b: number): number { return a + b }


function toUpperCase(str: string): string { return str.trim().toUpperCase() }


// Перезагрузка параметров и перезагрузка функции
interface MyPosition
{
    x: number | undefined
    y: number | undefined
}

// Интерфейс наследуется от MyPosition
interface MyPositionWithDefault extends MyPosition
{
    default: string
}

//Пишем разный функционал для функции
function position(): MyPosition
function position(a: number): MyPositionWithDefault

// Еще одна перегрузка
function position(a: number, b: number): MyPosition

// Определяем саму функцию
function position(a?: number, b?: number): MyPosition
{
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}

console.log(position());
console.log(position(42));
console.log(position(10, 15));