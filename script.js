const name = 'Matt';
const age = 34;
const greeting = `hi my name is ${name}. i am ${age}.`;

const box = document.getElementById("box")
const title = document.getElementById("title")
const img = document.getElementById("img")
const input = document.getElementById("input")
let data = input.value
img.addEventListener('click', clickHere)
input.addEventListener('change', listenHere)


const divNode = document.createElement('div')
const textNode = document.createTextNode("HEY")
const text = divNode.appendChild(textNode)

function clickHere() {
  console.log('here')
}

function listenHere() {
  console.log(data)
}

