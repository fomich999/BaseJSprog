// Массивы
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Viktoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {
}

// Method
// cars.push ('Рено')
// cars.unshift('Волга')
//
// const firstItem = cars.shift()
//const lastCar = cars.pop()
//console.log(lastCar)
// console.log(firstItem)
// console.log(cars)

//console.log(cars.reverse())
//console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person){
//     return person.budget === 3500
// })
// console.log("метод findIndex находит индекс = ", index, "по одному из параметров элемента массива=")
// console.log("элемент массива по индексу", index, ":")
// console.log(people[index])
//
// const person = people.find(function (person){
//     return person.budget === 1700000000000
// })
// console.log("метод find находит элемент массива по одному из параметров элемента:", person)
// const person = people.find(person => person.budget === 3500)
// console.log(person)

//console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars)

  const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)

  //const pow2Fib = fib.map( num => num **2)
//const pow2Fib = fib.map( pow2).map(sqrt) // const pow2Fib = fib.map( pow2).map(Math.sqrt)
//console.log(pow2Fib)
// const pow2Fib= fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)



// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// let  reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Viktoria', budget: 1700}
]

// people.reduce(function (acc,person) {
//     acc += person.budget
// }, 0)
const allBudget = people
    .filter(person => person.budget>2000)
    .reduce((acc, person) => { // строки 85-86 :то же свмое стрелочной функцией
       acc += person.budget
       return acc
}, 0)
console.log(allBudget);