// https://www.youtube.com/watch?v=Bluxbh9CaQ0
// Исходники в телеграм канале:
//https://teleg.one/js_by_vladilen​

/*
//Части курса с 1 по 3ю.

// 1 Переменные/////////////////////////////////

//alert(1)
const firstName = 'Alex'
//const lastName = 'Fomichev' //string
const age = 37 //number
const isProgrammer = true //boolean

const _ = 'private'
const $ = 'some value'
//const if = 'mkif' //err
const withNum5 = '5'
// const 5withNum = 5 // err
//age = 'some string'
//age = false
//age = 37

//console.log(firstName, lastName)
//console.log("age:", age, "is programmer:", isProgrammer)

// 2 Мутирование//////////////////////

//console.log('Имя человека:' + firstName + ', а возраст человека:' + age)
//console.log(age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//const lastName = prompt('input last name')
//alert(firstName + ' ' + lastName)

//3 операторы/////////////////////////

let currentYear = 2021
const birthYear = 1983
//const age = currentYear - birthYear

const a = 10
const b = 5
let c = 32
//c = c + a
c-=a
c*=a
c/=a
console.log('c =', c+=a)

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(++currentYear)
console.log(--currentYear)
*/

// 4 Типы данных//////////////////////////////

// const isProgrammer = true
// const name = 'Alex'
// const age = 37
// let x
// let y = null
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof y)
// console.log(y)
// console.log(null)
// console.log(typeof '')
// console.log(typeof "")
// console.log(typeof undefined)

// 5 Приоритет операторов

// const fullAge = 37
// const birthYear = 1983
// const currentYear = 2021
//
// const isFullAge = (currentYear - birthYear) >= fullAge // 38>=37 true
// //mdn
// console.log(fullAge)
// console.log(2021-1983)
// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log("Курс пока находится в процессе разработки")
// } else {
//     console.log('курс не получился')
// }

const  isReady = true

// if (isReady) {
//     console.log('всё готово!')
// } else {
//     console.log('всё не готово!')
// }

//Тернарное выражение
isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

// const num1 = 42 //number
// const num2 = '42' //string
// console.log(num1 === num2)

// 7 Булевая логика

//8 Функции

//function calculateAge(year) {
//    return 2020 - year
//}

//const myAge = calculateAge(1993)
//console.log(myAge)
//console.log(calculateAge(1990))

// function loginfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else
//         console.log('Вообще-то это уже будущее')
//
// }
// loginfoAbout('Владилен', 1993)
// loginfoAbout('Елена', 1995)
// loginfoAbout('Елена', 2022)

// 9 Массивы

//const cars = ['Mazda', 'Mercedes', 'Ford']
//const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car);
// }

// 11 Объекты
const person = {
    firstName: 'Alex',
    lastName: 'Fomichev',
    year: 1983,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        //console.log(this.greet)
        console.log('greet from person')
    }
}

console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
console.log(person.languages[0])
let key = 'languages'
key = 'year'
console.log(person[key])

person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()