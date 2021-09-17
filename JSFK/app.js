// // Рисуем столько котиков, сколько захотим!
// var drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };
// drawCats(10); // Вместо 10 тут может быть другое число

// 1234 + 57 * 3 - 31 / 4 // 57*3 = 171
// 1234 + 171 - 31 / 4    // 31/4 = 7.75
// 1234 + 171 - 7.75      // 1234 + 171 = 1405
// 1405 - 7.75
// 1397.25

// var score = 10;
// console.log(score += 7, score -= 3)
// var balloons = 100;
// console.log(balloons *= 2, balloons /= 4)
//
// var javascript = "java" + "script";
//
// console.log(javascript.length)
// console.log("script".length);
//
// console.log("Вот длинная строка".slice(0, 3));
// var str = "Вот длинная строка"
// console.log(str[0]+[5]);

// console.log("Эта длинная строка такая длинная".slice(0, 4));
// var longString = "Эта длинная строка такая длинная";
// console.log(longString.slice(4));
// console.log(longString.slice(4, 18));

// console.log("Эй, как дела?");
// console.log("Эй, как дела?".toUpperCase());
// console.log("эЙ, кАК деЛа?".toLowerCase());

// var lstr = "эЙ, кАК деЛа?"
// var lstr1 = lstr.slice(0,1).toUpperCase() + lstr.slice(1).toLowerCase()
// console.log(lstr, lstr1);


// Правила таковы: если посетителю 12 лет или больше,
//     он может проходить. Если ему еще не исполнилось 12, но его
// сопровождает взрослый, пусть тоже проходит. Во всех
// остальных случаях вход запрещен.

let age = 10
let accompanied = false
let cinema = false
function cinFunk (age, accompanied) {
    if ( (age >= 12) || ( ((age <= 11)&& (age>0)) && accompanied ) ) {
        cinema = true
    }
    console.log(cinema, age)
}
cinFunk(age, accompanied)