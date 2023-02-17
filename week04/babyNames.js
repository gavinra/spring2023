//doesn't work
const fs = require('fs')
const filePath = fs.readFile(__dirname + '\\Popular_Baby_Names.csv')
fs.readFile(__dirname + '\\Popular_Baby_Names.csv', 'utf-8', function(error, data) {
    if (error) {
        console.error(error)
    } else {
        var names = []
        for (var line in filePath) {
            var data = line.trim().split(",")
            names.push(data[3])
        }
        var name1 = "moe"
        var name2 = "jerry"
        names.push(name1)
        names.push(name2)
        names.sort()
        for (var name in names) {
            console.log(names[name])
        }
    }
}) 
console.log(filePath)