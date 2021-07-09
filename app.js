const person = {
   name: 'Alexandr',
   age: 37,
   isProgrammer: true,
   languages: ['ru','en', 'de'],
   'complex key': 'Complex Value',
['key_' + (1+3)]: 'Computed Key', // key_4
   greet() {
      console.log('greet from person')

   }
}
// console.log(person.name)
// console.log(person['age'])
//
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')
//
// //person['key_4'] = undefined
// delete person['key_4']
//
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const  age = person.age
// const languages =person.languages

const {name, age, languages} = person
console.log(name,age,languages)