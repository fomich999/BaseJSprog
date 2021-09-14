const heading = document.getElementById('hello')
// console.dir(heading.id)
// console.dir(heading.textContent)

// const heading2 = document.getElementsByTagName('h2')
// console.log(heading2[0]);
// const heading2 = document.getElementsByClassName('h2-class')
// console.log(heading2);

// const heading2 = document.querySelector('#sub-hello') // всегда 1 элемент
const heading2 = document.querySelector('h2') //

console.dir(heading2);

// const heading3 = heading2.nextElementSibling
const h2list =document.querySelectorAll('h2')
console.log(h2list);
const heading3 =h2list[h2list.length - 1]
console.log(heading3)

setTimeout( () => {
   addStylesTo(heading, 'JavaScript', 'red', '3rem')
}, 1500)

setTimeout( () => {
    addStylesTo(heading3, 'Практикуйся', 'blue')
}, 3000)

setTimeout( () => {
    addStylesTo(heading2, 'И всё получится!', 'yellow', '2rem' )
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    if (heading.style.color === 'red') {

    }
}