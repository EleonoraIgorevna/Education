// type func = {
//     <T, U>(arrayOne: T[], value: U): (T | U)[]
//     <T>(array: T[]): T[]
// }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var appendArrayFunc = function (arrayOne, value) { return __spreadArray(__spreadArray([], arrayOne, true), [value], false); };
// console.log(appendArrayFunc([1, 2, 3], 456));
var account1 = {
    amount: 1000000,
    currency: 'RUB',
    currencySign: '₽',
    locked: false,
};
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
var PremiumAccount = /** @class */ (function (_super) {
    __extends(PremiumAccount, _super);
    function PremiumAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PremiumAccount;
}(Account));
var account = new Account();
var premiumAccount = new PremiumAccount();
// account instanceof Account === true
// account instanceof PremiumAccount === false
// premiumAccount instanceof Account === true
// premiumAccount instanceof PremiumAccount === true
function sumValues(inputs) {
    var sum = 0;
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var element = inputs_1[_i];
        sum += element;
    }
    console.log(sum);
}
sumValues([1, 2, 3]);
var figure = {
    quantity: 4,
    length: 5
};
//(Function Declaration)
function Perimeter(value) {
    console.log(value.quantity * value.length);
}
//(Function Expressions)
var newPerimeter = function (value) {
    console.log(value.quantity * value.length);
};
// Perimeter(figure);
newPerimeter(figure);
