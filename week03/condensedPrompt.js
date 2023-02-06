//Here's the condensed version of the week06 assignment

const prompt = require("prompt-sync")();

const names = ["dogs", "cats", "rabbits", "cows", "horses"]
var numbers = []

for (var number in names) {
    numbers.push(prompt(`How many ${names[number]}? `))
}

var min = numbers[0]
var max = numbers[0]

for (var variable in numbers) {
    a = numbers[variable]
    if (a < min) {
        min = a
    } else if (a > max) {
        max = a
    }
}

console.log(`Minimum: ${min}`)
console.log(`Maximum: ${max}`)