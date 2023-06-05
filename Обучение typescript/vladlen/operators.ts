interface Person
{
    name: string
    age: number
}

type PersonKeys = keyof Person // name или age
let myKey: PersonKeys = "name"
myKey = "age"

type User = {
    _id: number //Для ОРМ Монгус
    name: string
    email: string
    createdAt: Date
}
//Исключаем поля из типов
type UserKeysNoMeta = Exclude<keyof User, "id" | "createdAt"> //name email
type UserKeysMeta = Pick<keyof User, "name" | "email"> //name email

let myValue: UserKeysNoMeta = "name"
// myValue = "createdAt" //Тут будет ошибочка Кря