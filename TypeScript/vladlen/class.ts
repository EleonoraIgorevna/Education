class Typescript
{
    version: string
    constructor(version: string)
    {
        this.version = version
    }

    info(name: string)
    {
        return `[${name}]:Typescript version ${this.version}`
    }
}


// class Car
// {
//     readonly model: string
//     readonly numberOfWheels: number = 4


//     //перезаписать можем только внутри констурктора
//     constructor(theModel: string)
//     {
//         this.model = theModel
//     }
// }


class Car
{
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) { }
}

//////////////////////////////////////////////

// Бывают три вида модификаторов protected, public, private
// Если мы не пишем модификаторов, то по умолчанию они у нас публичные
//






class Animal
{
    protected voice: string = ""                                 //Данные protected (свойства или методы) поля внутри в классе Энимал и во всех классах, которые наследуются
    public color: string = "black"
    private go()                                                    //Данные private доступны только в том классе, в котором они определены, но не в наследуемых классах
    {
        console.log("Go");
    }
}

class Cat extends Animal
{
    public setVoice(voice: string): void
    {
        this.voice = voice
        console.log(this.voice);
    }
}

let cat: string = new Cat().color;                                                      //У instance класса мы не можем получить свойство с модификатором protected
let may: void = new Cat().setVoice("may");
console.log(cat);






/////////////////////////////////
// Абстрактные классы

abstract class Component
{
    abstract render(): void
    abstract info(): string

}

class AppComponent extends Component
{
    render(): void
    {
        console.log("AppComponent");
    }

    info(): string
    {
        return "info";
    }

}