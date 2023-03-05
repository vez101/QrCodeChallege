const name = 'Matt';
const age = 34;
const greeting = `hi my name is ${name}. i am ${age}.`;


const box = document.getElementById("box")
console.log(box)

const title = document.getElementById("title")
console.log(title)

const img = document.getElementById("img")
console.log(img)


const divNode = document.createElement('div')
const textNode = document.createTextNode("HEY")


box.appendChild(divNode.appendChild(textNode))