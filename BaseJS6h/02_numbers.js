// // https://www.youtube.com/watch?v=Bluxbh9CaQ0
// // Исходники в телеграм канале:
// //https://teleg.one/js_by_vladilen​
//
  // Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('Infinity 1/0, 2/0:', 1/0, 2/0)
// console.log('Number.NaN:', Number.NaN) //Not A Number
// console.log('typeof NaN:', typeof NaN)
// console.log('2/ undefined:', 2 / undefined)
// const  weird = 2 / undefined
// console.log('weird:', weird)
// console.log( 'isNaN(weird)', Number.isNaN(weird) )
// console.log( 'isNaN(42)', isNaN(42) )
// console.log( 'Number.isFinite(weird)', Number.isFinite(weird) )
// console.log( 'Number.isFinite(42)', Number.isFinite(42) )
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2)
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log('+stringInt:', ((+stringInt) + 2))
//
// console.log(parseInt(stringFloat) + 2)
// console.log('parseFloat:', (+stringFloat + 2))

// console.log(0.4 + 0.2) // 0.4+0.2 = 0.6
// console.log((2/5) + (1/5))
//
// console.log(+(0.4 + 0.2 + 0.333333).toFixed(4))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.345345n) // error

//console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) //2n

//3 Math //
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(9))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 11, 422))
// console.log(Math.min(42, 12, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.9))
//
// console.log(Math.random()*)

// 4 Example
// function getRandomBetween(min, max) {
//     let a = Math.random()
//
//     console.log('a = Math.random:', a)
//     console.log('max - min:', max - min)
//     console.log('a * (max - min):', a * (max - min))
//
//     console.log('floor:', Math.floor(a * (max - min)))
//     console.log('round:', Math.round(a * (max - min)))
//
//     let b = (a * (max - min) + min)
//     console.log('b = (a * (max - min) + min)')
//     console.log('b:', b)
//
//     console.log('round b:', Math.round (b))
//     console.log('floor b:', Math.floor (b))
//
//     console.log(Math.floor(a * (max - min) + min))
//
//     return Math.floor(a * (max - min + 1) + min)
// }
// console.log('funcresult is: floor(a * (max - min + 1) + min):', getRandomBetween(10, 42));
