// class User {

//     name: string;
//     age: number;
//     cities: string[]

//     constructor(name: string, age: number, cities: string[]) { // Конструктор не может принимать Generic, не может быть типизирован
//         this.name = name;
//         this.age = age;
//         this.cities = cities;
//     }
// }

// const user = new User('Zeratul', 17, ["Moscow", "Belgorod"]);
// console.log(user); // User { name: 'Zeratul', age: 17, cities: [ 'Moscow', 'Belgorod' ] }
// console.log(typeof user); // console.log(user);


// //es5 - не имеет функций и если в таргет стоит es5, то класс скомпилируется в функцию
// //стрикт проперти инстализейшн

// class Programmist {
//     level!: string
// }
// //! иначе Тп будет предупреждат, что присваивание свойства в конструкторе без контструктора не гарантированно. ! - тп не переживай, этот параметр только не налл и точно не undefined


// let programmist = new Programmist();
// programmist.level = 'junior';

// //strictPropertyInitialization - !




// перегрузка конструктора
// class Overload {
//     name!: string;
//     age!: number;

//     constructor();
//     constructor(age: number);
//     constructor(name: string);
//     constructor(name: string, age: number);
//     constructor(value?: string | number, age?: number) { //последний конструктор должен содержать все правила, которые мы перечислили выше

//         if (typeof value === 'string') {
//             this.name = value;
//         } else if (typeof value === 'number') {
//             this.age = value;
//         }
//         if (typeof age === 'number') this.age = age;
//     }
// }
// // Создаем 4 разных объекта
// const overload = new Overload('Mike') //Overload { name: 'Mike' }
// const secondOverload = new Overload(); //{}
// const thirdOverload = new Overload(33);  //Overload { age: 33 }
// const fourthOverload = new Overload('Mike', 33);

// console.log(overload);
// console.log(secondOverload);
// console.log(thirdOverload);
// console.log(fourthOverload);






// методы класса
enum PaymentStatus {
    Holded = 'Holded',
    Processed = 'Processed',
    Reversed = 'Reversed'
}


//Интерфейсы фнутри класса прописывать нельзя
interface objOne {
    city: string

}


class Payment {
    // public - публичное свойство или метод, по умолчанию они все public
    public id: number;
    //Тип статуса создается по умолчанию
    //protected - данные свойства или данный метод. Это аналаг #. Свойство доступно только внутри текущего класса или в новом классе, который расширяет класс Payment
    protected status: PaymentStatus = PaymentStatus.Holded;
    // getTime переводит в число и по этой причине тип указываем number
    // private доступен только в этом классе и больше нигде
    private createdAt: number = new Date().getTime();
    updatedAt!: number;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date().getTime();
        this.status = PaymentStatus.Holded;
    }

    //Методы обявляются без записи function
    protected getPaymentLifeTime(): number | objOne {
        return new Date().getTime() - this.createdAt;
    }

    protected unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Payment can not be reversed');
        }
        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date().getTime();
    }
}

class NewPay extends Payment {
    //Создали метод, который внутри себя будет использовать логику родительского класса Payment и должен иметь возможность образаться к доступным методам
    someMethod() {
        this.getPaymentLifeTime
        this.unholdPayment
        this.status
        // this.createdAt //Свойство "createdAt" является закрытым и доступно только в классе "Payment".
    }
}

//создание нового экземпляра - объект через конструктор
let pay = new Payment(342425324);
console.log(pay); //Payment { status: 'Holded', createdAt: 1682614379785, id: 342425324 }
let pay1 = new NewPay(123);
console.log(pay1); //NewPay { status: 'Holded', createdAt: 1682614429284, id: 123 }
// pay.unholdPayment(); //Свойство "unholdPayment" является защищенным и доступно только в классе "Payment" и его подклассах. Это аналаг #




//Абстрактные классы - на прямую мы не можем создавать обхекты их конструктора этого класса, мы можем их создать только через класс, который расширяет Абстрактный класс
// Родительский класс предназначен только для того, чтобы создавать новые классы
abstract class Abstraction {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}
class NewAbs extends Abstraction { }
let abs = new NewAbs('abs', 10)

//_ это защищенная запись
// extends - наследование и расширение дополнительными свойствами и методами
// super из конструктора - обращение к родительскому классу
// this - обращение к внутренним свойствам
// static работает только внутри класса, Но! Они наследуются
// классы могут наследовать функции