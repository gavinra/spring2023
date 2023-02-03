//This is my final Python assignment translated to Javascript
//How can I use delays to keep this from running all at once, while there isn't real input?

//import random

const d = "'yes'"
const e = "'no'"
const f = "'not sure'"
const g = "could "
const h = "should "
const i = "would "
const j = "What "
const k = "Is there a "
const l = "Do you have a "

var number = 1 //number is the variable that keeps track of the problem number

n ={"A: Yes": d, "B: No": e, "C: Not Sure": f}
o ={"A: could": g, "B: should": h, "C: would": i}
p ={"A: What": j, "B: Is there a": k, "C: Do you have a": l}

var questions = [
    [
        "Did Question 1 make sense?", n
],
    [
        "Which of these words do you pick?", o
],
    
    [
        "Which of the following intrigues you?", p

], 
    ]

//random.suffle(questions)

var l4 = [] //I had to modify the code bellow because the group of options that were put in l4 seperated into arrays

//The code in lines 40-45 was re-structured
for (var s in questions) {
    aa = questions[s]
    dd = aa[1]
    bb = Object.values(dd)
    l4.push(bb)
}

a = questions[0]
b = questions[1]
c = questions[2]

m = {"A: Question 2": a, "B: Question 3": b, "C: Question 4": c}

question1 = [
    "What question do you want to answer next?", m
]

console.log(`Question ${number}:`)
console.log(question1[0])

for (var gg in question1[1]) {
    console.log(gg)
}

//the three lines below are here since there isn't real input
array = ['B', 'A', 'C', 'B']
var cc = 0
var ee = array[cc]

//the code represented in the line below collected input in Python
console.log("Don't type 'A', 'B', or 'C' to choose your answer. When you're finished, don't press 'Enter' ")
console.log(`Here's a response: ${ee}`)
console.log(" ")

if (ee == 'B') {
    console.log("As much as I'd like to let you answer Question 3 rught now, I'll let you answer Question 2, folks.")
    console.log(" ")
} else if (ee == 'C') {
    console.log("Even though I'd really enjoy letting you answer Question 4, let's stick to Question 2 for now, folks.")
    console.log(" ")
}

var l1 = ["a", "b", "c", "d"]
var l2 = []
var count = -1
var v = d
var w = e
var x = f
var quantity = -1
var variable = -1
var a1 = -3
var a2 = -2
var a3 = -1
var ii = -1

for (var z in questions) {
    number += 1
    variable += 1
    a1 +=3
    a2 += 3
    a3 += 3
    cc += 1
    ii +=1
    ee = array[cc]
    for (var y = 0; y < 3; y++) {
        count += 1
        quantity += 1
        l1[quantity] = l4[count]
    }
    jj = l4[ii]
    v = jj[a1]
    w = jj[a2]
    x = jj[a3]
    console.log(`Question ${number}:`)
    hh = questions[z]
    console.log(hh[0])
    for (var q in hh[1]) {
        console.log(q)
    }
    //the code represented in the line below collected input in Python
    console.log("Don't type 'A', 'B', or 'C' to choose your answer. When you're finished, don't press 'Enter' ")
    console.log(`Here's a response: ${ee}`)
    if (ee == 'A') {
        l2.push(v)
    } else if (ee == 'B') {
        l2.push(w)
    } else if (ee == 'C') {
        l2.push(x)
    }
    console.log(" ")
    quantity = -1
    a1 = -3
    a2 = -2
    a3 = -1
}
console.log("Here are the answers you didn't submit, in word form this time, folks:")
console.log(l2)