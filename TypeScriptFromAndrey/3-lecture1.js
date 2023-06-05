// class User {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Holded"] = "Holded";
    PaymentStatus["Processed"] = "Processed";
    PaymentStatus["Reversed"] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        //Тип статуса создается по умолчанию
        //protected - данные свойства или данный метод. Это аналаг #. Свойство доступно только внутри текущего класса или в новом классе, который расширяет класс Payment
        this.status = PaymentStatus.Holded;
        // getTime переводит в число и по этой причине тип указываем number
        // private доступен только в этом классе и больше нигде
        this.createdAt = new Date().getTime();
        this.id = id;
        this.createdAt = new Date().getTime();
        this.status = PaymentStatus.Holded;
    }
    //Методы обявляются без записи function
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAt;
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Payment can not be reversed');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date().getTime();
    };
    return Payment;
}());
var NewPay = /** @class */ (function (_super) {
    __extends(NewPay, _super);
    function NewPay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Создали метод, который внутри себя будет использовать логику родительского класса Payment и должен иметь возможность образаться к доступным методам
    NewPay.prototype.someMethod = function () {
        this.getPaymentLifeTime;
        this.unholdPayment;
        this.status;
        // this.createdAt //Свойство "createdAt" является закрытым и доступно только в классе "Payment".
    };
    return NewPay;
}(Payment));
//создание нового экземпляра - объект через конструктор
var pay = new Payment(342425324);
console.log(pay); //Payment { status: 'Holded', createdAt: 1682614379785, id: 342425324 }
var pay1 = new NewPay(123);
console.log(pay1);
// pay.unholdPayment(); //Свойство "unholdPayment" является защищенным и доступно только в классе "Payment" и его подклассах. Это аналаг #
// console.log(pay);
// abstract class Abstraction {
//     name: string;
//     value: number;
//     constructor(name: string, value: number) {
//         this.name = name;
//         this.value = value;
//     }
// }
// class NewAbs extends Abstraction { }
// let abs = new NewAbs('abs', 10)
