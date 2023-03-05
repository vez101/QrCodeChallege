const name = 'Matt';
const age = 34;
const greeting = `hi my name is ${name}. i am ${age}.`;

const box = document.getElementById("box")
const title = document.getElementById("title")
const img = document.getElementById("img")
img.addEventListener('click', clickHere)

const divNode = document.createElement('div')
const textNode = document.createTextNode("HEY")
const text = divNode.appendChild(textNode)

function clickHere() {
  const sayHey = box.appendChild(text)
  console.log('here')
}

console.log(img)