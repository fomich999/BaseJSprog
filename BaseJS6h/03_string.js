// const name = 'Александр'
// const age = 30
//
// function  getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + 'лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${(getAge()) < 30 ? 'A' : 'B'} лет.`
// console.log(output)

// const output = `
//  <div>This is div</div>
//  <p> This is o</p>
// `
// console.log(output)

/*
const name = 'Александр'
console.log(name.length)
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('!'))
console.log(name.startsWith('Алек'))
console.log(name.endsWith('др!'))
console.log(name.repeat(3))
const string = '     password           '
console.log(string)
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())
*/

function logPerson(s, name, age) {
    if (age <0 ) {
       age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}` //info about person
}

const personName = 'Александр'
const personAge = 30

const personName2 = 'Владилен'
const personAge2 = -10


const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)