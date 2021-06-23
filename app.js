// Массивы

const cars = ['мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function additemToEnd() {

}

//Method
//cars.push('Рено')
//cars.unshift('Волга')
//console.log(cars)
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

const index = cars.indexOf('БМВ')
console.log(cars[index]);
cars[index] = 'Porsche'
console.log(cars);
// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const  reverseText = text.split('').reverse().join('')
// console.log(reverseText)