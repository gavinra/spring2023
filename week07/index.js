import express from 'express'
import redis from 'redis'
const app = express()
const port = 80         // port 80 is used for the http protocol

const db = redis.createClient({
    url: 'redis://localhost:6379'
});

await db.connect()
//await db.mSet('totalCount', '0')
////await db.mSet('count1', '0', 'count2', '0')

/*the goal here is to make something that counts the total amout of times each page has been opened collectively
the global count variable is meant to be incremented each time any page is opened; that number should be shown underneath the 
pre-existing text
The count variable may need to be restructured 
Use mSet() somehow
*/
app.get('/inc', async(req, res) => {
    const count = await db.incr("count1") 
    const number = await db.get('count3') //original plan, revised 
    const total = count + number //original plan, revised; why doesn't it do the addition correctly?
    console.log(total) //original plan, revised; this line was put here so that I could see if this was working properly
    res.send(`count: ${count}, Here's the number of times the pages were opened collectively: ${total}`) //new plan
    //res.send(`Here's the number of times the pages were opened collectively: ${total}`) //original plan, revised
})

app.get('/dec', async(req, res) => {
    const count4 = await db.incrBy("count2", -1)
    const count = await db.incr('count3') //original plan, revised
    const number = await db.get('count1') //original plan, revised
    const total = count + number //original plan, revised; why doesn't it do the addtion correctly?
    console.log(total) //refer to line 26 comment
    res.send(`count: ${count4}, Here's the number of times the pages were opened collectively: ${total}`) //new plan
    //res.send(`Here's the number of times the pages were opened collectively: ${total}`) //original plan, revised
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})