//I deleted most of my "non-funtional code" which was commented out 
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("\nPress s to save a number that is shown at time of input")
console.log("To increase the speed that the number increaments, press i")
console.log("If you'd like to decrease that speed, press d\n")
var count = 0
var delta = 1
var speed = 1000
var a = 12
var b = a - 2
function j() {
    setInterval(() => {
    count += delta
    console.log("\x1b[1A" + `${count}`)
}, 1000)
}
j()

process.stdin.on('keypress', (character, key) => {
    if (character == 'd') {
        console.log("Speed has been decreased by 100 milliseconds\n")
        //////////the following 5 lines were found online
        var thisFunction = () => {
            speed = speed + 100
            setTimeout(j, speed)
        }
        setTimeout(thisFunction, speed)
    } else if (character == 's') {
        
        //console.log(`\x1b[${a};1H`)
        console.log("\x1b[12;1A" + `Number saved: ${count}`)
        //console.log(`\x1b[2`)
        //console.log("<Esc>[2A")
        //console.log(`\x1b[${a}:1H` + `Number saved: ${count}\n`)
        //console.log("\x1b[3A")
    
    } else if (character == 'i') {
       /////////////the goal with this key was to print 'speed has increased by 100 millisecods' on line 13 only, for about a half a second
        ////////////the following six lines (except for the comment) were found online 
       var myFunction = () => {
            speed = speed - 100
        //    console.log(`\n${speed}`)
            setTimeout(j, speed)
        }
        setTimeout(myFunction, speed)
        console.log("\x1b[13;1H" + "Speed has been increased by 100 milliseconds\n")
        setTimeout(() => {
            console.log("\x1b[13;1H")
        }, 500)
        //console.log("\x1b[10;1H")
        //setTimeout(() => {
        //    console.log("\x1b[13;1H" + " ")
        //}, 1000)
    }
    //console.log("\x1b[11;1H")
})