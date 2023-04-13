const { link } = require('fs');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("\nPress s to save a number that is shown at time of input")
console.log("To increase the speed that the number increaments, press i")
console.log("If you'd like to decrease that speed, press d\n")
console.log(" ")

var count = 0
var delta = 1
var speed = 1000
var a = 1
var b = a + 4
var i = 0
var d = 0
var string = "the"
var e = 0
var inc = speed - 100
var dec = speed + 100
var speedQ = speed
var lineMovement = 0


function j() {
    setInterval(() => {
    count += delta
    console.log("\x1b[1A" + `${count}`)
}, speed)
}
j()

function function1() {
    //////////the following 5 lines were found online
    var thisFunction = () => {
        speed = speedQ
        setTimeout(j, speed)
    }
    setTimeout(thisFunction, speed)
}

function printWithSpace() {
    console.log(` ${string}\n`)
    lineMovement ++
}

function printWithoutSpace() {
    console.log(`${string} \n`)
    lineMovement ++
}

var c = printWithoutSpace

//reCuOriPos stands for "return the cursor to the original position"
function reCuOriPos() { 
    console.log(`\x1b[${lineMovement}A`)
    lineMovement = 0
}

function incMov() {
    if (!e == 0) {
        lineMovement ++
        e = 0
    }
}

function func() {
    console.log(`Number saved: ${count}`)
    lineMovement ++
    console.log(" ")
    lineMovement ++
}

process.stdin.on('keypress', (character, key) => {
    
    if (character == 'd') {
        
        d++
        string = "Speed has been decreased by 100 milliseconds"
        speedQ = dec
        if (d == 1) {
            //console.log("\x1b[2A")
            printWithoutSpace()
            function1()
            reCuOriPos()

        } else if (d > 1) {
            //console.log("\x1b[3A")
            
            if (c == printWithSpace) {
                c = printWithoutSpace
            } else if (c == printWithoutSpace) {
                c = printWithSpace
            }

            c()
            function1()
            reCuOriPos()
            
        }

    } else if (character == 's') {
        
        e ++
        func()
        reCuOriPos()
        
    } else if (character == 'i') {
          
        i++
        string = "Speed has been increased by 100 milliseconds"
        speedQ = inc
        if (i == 1) {
            //console.log("\x1b[2A")
            printWithoutSpace()
            function1()
            reCuOriPos()

        } else if (i > 1) {
            //console.log("\x1b[3A")
            
            if (c == printWithSpace) {
                c = printWithoutSpace
            } else if (c == printWithoutSpace) {
                c = printWithSpace
            }

            c()
            function1()
            reCuOriPos()
        }
    }

})