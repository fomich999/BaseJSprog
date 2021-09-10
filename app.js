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
   addStylesTo(heading)
}, 1500)

setTimeout( () => {
    addStylesTo(heading3)
}, 3000)

function addStylesTo(node) {
    node.textContent = 'Changed from JavaScript'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}
