import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

var array1 = ["Here", "are", "some", "words"]
var array2 = []
const e = "These are random words"

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

var number = 0
await client.set('cat', 'meow');
const value = await client.get('cat');
console.log(`got ${value} from redis`);
//the computer throws a fit when the following line is run
await client.incr(number)
console.log(number)
//I'm not sure why b = null
const b = await client.getRange(e, -3, -1)
console.log(`here's something from redis, apparently: ${b}`);
for (var v = 0; v < 5; v ++) {
    //there seems to be something wrong with the following line
    await client.append(array2, array1[v])
}
console.log(array2)

await client.disconnect();