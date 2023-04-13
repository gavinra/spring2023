//It works!
import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

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

await client.exists('array2')
//array used to be set equal to this line
await client.append('array2', 'value')
//I just added this line and set array to it
var array = await client.get('array2')
console.log(array)

await client.disconnect();