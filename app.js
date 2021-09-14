const heading = document.getElementById('hello')
// console.dir(heading.id)
// console.dir(heading.textContent)

// const heading2 = document.getElementsByTagName('h2')
// console.log(heading2[0]);
// const heading2 = document.getElementsByClassName('h2-class')
// console.log(heading2);
// const heading2 = document.querySelector('#sub-hello') // всегда 1 элемент
const heading2 = document.querySelector('h2') //

// const heading3 = heading2.nextElementSibling
const h2list =document.querySelectorAll('h2')
const heading3 =h2list[h2list.length - 1]


setTimeout( () => {
   addStylesTo(heading, 'JavaScript', 'red', '3rem')
}, 1000)

const link = heading3.querySelector('a')
link.addEventListener( 'click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    setTimeout( () => window.location = url, 2000)
})

setTimeout( () => {
    addStylesTo(heading3.children[0], 'Практикуйся', 'blue')
}, 1500)

setTimeout( () => {
    addStylesTo(heading2, 'И всё получится!', 'yellow', '2rem' )
}, 2000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'

    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
      heading.style.color = 'red'
      heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})