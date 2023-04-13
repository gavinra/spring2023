import express from 'express'
import redis from 'redis'
const app = express()
const port = 80         // port 80 is used for the http protocol

const db = redis.createClient({
    url: 'redis://localhost:6379'
});

await db.connect()

app.use(express.static('public'))

app.get('/inc', async(req, res) => {
    await db.incr("countC") 
    const count = await db.get('countC') 
    await db.incr('newCount')
    const total = await db.get('newCount')
    console.log(total) 
    res.send(`count: ${count}, Here's the number of times the pages were opened collectively: ${total}`)
})

app.get('/dec', async(req, res) => {
    await db.incrBy("countD", -1)
    const count4 = await db.get('countD')
    await db.incr('newCount')
    const total = await db.get('newCount') 
    console.log(total) 
    res.send(`count: ${count4}, Here's the number of times the pages were opened collectively: ${total}`) 
})

app.get('/new', async(req,res) => {
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})