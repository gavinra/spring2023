import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

//var array1 = ["Here", "are", "some", "words"]
//var array2 = []
//const array1 = await client.rPush('mylist-array-thing-y', 'this')

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
await client.exists('array2')

//const myArray = ['these', 'are', 'additional', 'words', 'for', 'your', 'entertainment']

//for (var a = 0; a < 8; a++) {
//var g = await client.rPush('array1', myArray[a])
//}
//var g = await client.exists('array1')
//await client.rPush('array1', "these")
//await client.rPush('array1', "are")
//await client.rPush('array1', "for")
//await client.rPush('array1', "your")
//await client.rPush('array1', "entertainment")

await client.set('number', 0)
await client.set('cat', 'meow')
const value = await client.get('cat')
console.log(`got ${value} from redis`)
await client.incr('number')
var number = await client.incr('number')
console.log(number)
await client.set('e', 'these are random words, sort of. . .')
const b = await client.getRange('e', 10, -1)
console.log(`Here's something from redis: "${b}"`);
//for (var v = 0; v < 5; v ++) {
    //there seems to be something wrong with the following line 
    var array2 = await client.append('array2', 'array1')
//}
console.log(array2)

await client.disconnect();