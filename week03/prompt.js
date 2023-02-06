//I chose the week 06 assignment because I figured most people would do a quiz

const prompt = require("prompt-sync")();

const names = ["dogs", "cats", "rabbits", "cows", "horses"]
var numbers = []
numbers.push(prompt(`How many ${names[0]}? `))
numbers.push(prompt(`How many ${names[1]}? `))
numbers.push(prompt(`How many ${names[2]}? `))
numbers.push(prompt(`How many ${names[3]}? `))
numbers.push(prompt(`How many ${names[4]}? `))
var min = numbers[0]
var max = numbers[0]

if (numbers[1] < min) {
    min = numbers[1]
}
if (numbers[1 > max]) {
    max = numbers[1]
}

if (numbers[2] < min) {
    min = numbers[2]
}
if (numbers[2] > max) {
    max = numbers[2]
}

if (numbers[3] < min) {
    min = numbers[3]
}
if (numbers[3] > max) {
    max = numbers[3]
}

if (numbers[4] < min) {
    min = numbers[4]
}
if (numbers[4] > max) {
    max = numbers[4]
}

console.log(`Minimum: ${min}`)
console.log(`Maximum: ${max}`)