// 1 Функции

// FUNCTION EXPRESSION
 ////const greet2 = function(name) {
 //}
// const greet2 = function greet2(name) {
//     console.log('Привет 2- ', name)
// }
//
// greet( 'Лена')
// greet2( 'Леша')
//
// // FUNCTION DECLARATION
// function greet(name) {
//     console.log('Привет - ', name)
// }

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции
function greet(name) {
    //console.log('Привет - ', name)
}

const arrow = (name, age) => {
    //console.log('Привет - ', name, age)
}
//arrow('Alexandr')

const arrow2 = name => console.log('Привет - ', name)
//arrow2('Vladilen')

const pow2 = num => num ** 2

//console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b= a * 2) => a +b

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all){
    let result = 0
    for (let num of all) {
        result += num
    }
    //console.log(all)
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
//console.log(res)

// 5 Замыкания
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Alexandr')
//console.log(logWithLastName)
console.log(logWithLastName('Fomichev'))
console.log(logWithLastName('Minin'))
