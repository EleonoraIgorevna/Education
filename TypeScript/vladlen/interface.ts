// Служит для объектов и классов

interface Rect
{
    readonly id: string
    color?: string
    size: {
        widht: number
        height: number
    }
}

// Вебшторм сразу пытается выполнить автокомпликт и подказывет какие поля можно реализовать
// WebStorm, IDE JetBrains для разработки на JS и связанных с ним технологиях, автоматизирует рутинную работу, помогая вам решать более сложные задачи 

let rect1: Rect = {
    id: "id34",
    size: {
        widht: 23,
        height: 22
    },
    color: "red"
}

let rect2: Rect = {
    id: "id34",
    size: {
        widht: 23,
        height: 22
    }
}

rect2.color = "black"

// Приводит к типу
let rect3 = {} as Rect
let rect4 = <Rect>{}


//Интерфейсы могут наследоваться
// Тип функции указывается, как стрелочная функция
// number - тип данных, который должен быть возвращен
interface RectWithArea extends Rect
{
    getArea?: () => number
    getArea2: () => number
}


let rect5: RectWithArea = {
    id: "id34",
    size: {
        widht: 23,
        height: 22
    },
    getArea2(): number
    {
        return this.size.widht * this.size.height
    }
}


interface IClock
{
    time: Date
    setTime(date: Date): void
}

////////////////////////////////////////////////////////


// Осуществлять - realize, implement, exercise, execute, fulfill, effect
class Clock implements IClock
{
    time: Date = new Date()
    //Вебшторм автоматически тут все заполнил
    setTime(date: Date): void
    {
        this.time = date
    }
}


////////////////////////////////////////////////////////

interface Styles
{
    //указываем тип ключа
    [key: string]: string
}


let css: Styles = {
    "marginTop": "23",
    "border": "2px",
    "height": "5px"
}

////////////////////////////////////////////////////////