//This is the modified week07 assignment changed to meet the week09 thing
import express from 'express'
import bodyParser from 'body-parser' 
import redis from 'redis'

const app = express()
const port = 80         // port 80 is used for the http protocol

// create application.x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

const db = redis.createClient({
    url: 'redis://localhost:6379'
});

await db.connect()

app.use(express.static('week09/public'))  

const thingAMaJing = await db.get('newThing')
if (thingAMaJing == null) {
    await db.set('newThing', '<ol></ol>')
}

const last = '</ol>'

app.post('/static.html', urlencodedParser, async(req, res) => { 
    var count = await db.get('countt')
    if (count == null) {
        await db.set('countt', -1)
    } 
    var lVariable = req.body.default //Thanks Mr. Schmidt
    var additionalVariable = `<li>${lVariable}</li>`
    var newThing = await db.getRange('newThing', 0, -6)
    var Thing = newThing + additionalVariable + last
    await db.set('newThing', `${Thing}`)
    var variablesVariable = await db.get('newThing')
    await db.incr('countt')  /*By the way, I already have something else called 'count' stored in redis,
    that's why there are two "t's" in the countt above*/
    var countt = await db.get('countt')
    
    res.send(`<!DOCTYPE html>
        <html>
        <head>
            <title>Form</title>
        </head>
        <body>
            <h1>Form</h1>
                <form action="/static.html" method="post">
                    <textarea id="mytest" rows="4" cols="30" name="default">Default Comment</textarea>
                    <input type="submit" value="Hey there! Click here to submit those words of yours!">
                </form>
                <br />
                <h2>Showing ${countt} Comments:</h2>
                    ${variablesVariable}<br />
                    <button type="button">Remove All Comments (I don't do anything, by the way.)</button>  


        </body>
        </html>`)
})

//everything below this comment is from week 7, except for line 94
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

app.get('/save/:number', async(req, res) => {
    await db.set("thenumber", req.params.number)
    res.send("OK")
})

app.get('/showme', async (req,res) => {
    const number = await db.get("thenumber")
    res.send(`<!DOCTYPE html><html><body>${number}</body></html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log("Modified week07 in week09")
})