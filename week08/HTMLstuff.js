import express from 'express'
import redis from 'redis'

const app = express()
const port = 80

const db = redis.createClient({
    url: 'redis://localhost:6379'
});

await db.connect()
var varia = 0

app.use(express.static('week08/public'))

//The following is the "My Formatted Content" page
app.get('/HTMLstuff.html/:variable', async (req, res) => {
    if (req.params.variable == 'ETFC'){
        await db.set('variable', 'Jumped from "Form Experimentation" to "My Formatted Content."')
    } else if (req.params.variable == 'PTFC') {
        await db.set('variable', 'Jumped from "Web Page" to "My Formatted Content."')
    } else {
        await db.set('variable', 'You typed this URL into your browser manually, right?')
    }
    const vari = await db.get('variable')
    console.log(vari)
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>My Formatted Content</title>
    </head>
    <body>
       <h1>My Formatted Content</h1>
       
          <h2>Introduction:</h2>
             I spent a lot of time working on the "Form Experimentation" page, because it is largely based upon the file I used to tinker with the HTML forms.<br />
             This page is here just to bump my number of pages to three.
       
          <h2>Main Words:</h2>
             Enclosed in this section are some words, which explain some of how I got to this point in my assignment.<br />
             I'm a procrastinator, like I'm sure many of us are. I also have committed to a lot of activities. These two things do not really help one another.
             After a while, this led to becoming two weeks behind in this class's assignments, which is why I am investing all of these hours in this. 
             Reading and comprehending the content of the HTML Dog Beginner's tutorial consumed most of my school day on Monday, since I experimented with many of the concepts for many hours, in hopes that I would acknowledge each tag's purposes and remember their parameters.
             By the way, it wasn't until relatively recently that I grasped the "formal-ish" definition of a parameter. After finishing the tutorial, I began working on the week 8 assignment, now long overdue.
             Now, here it is! These are the main words.<br />
             <br />
    
             Here is a textarea for visual interest:<br />
             <textarea rows="3" cols="40">You can type here if you'd like</textarea>
    
          <h2>Links:</h2>
             <a href="http://localhost/HTMLstuff1.html/CTFE">Form Experimentaion</a><br />
             <a href="http://localhost/HTMLstuff2.html/CTWP">Web Page</a>
             <br />
    
          <h2>Data From Redis:</h2>
             <h3>The data which is under this line changes depending on what page you start at, and where you end up after clicking a link:</h3>
                ${vari}
           
    </body>
    </html>`)
})

//The following is the "Form Experimentation" page
app.get('/HTMLstuff1.html/:variable1', async (req, res) => {
    if(req.params.variable1 == 'CTFE') { 
        await db.set('variable1', 'Jumped from "My Formatted Content" to "Form Experimentation."')
    } else if (req.params.variable1 == 'PTFE') {
        await db.set('variable1', 'Jumped from "Web Page" to "Form Experimentation."')
    } else {
        await db.set('variable1', 'You typed this URL into your browser manually, right?')
    }
    varia = await db.get('variable1')
    console.log(varia)
    res.send(`<!DOCTYPE html>
    <html>
    <head>
       <title>Form Experimentation</title>
    </head>
    <body>
       <h1>Form Experimentation</h1>
       
          <h2>Different Types of Forms:</h2>
             
             <h3>The basic textbox:</h3> 
                It's basically a box for text.<br />
                <br />
                <input type="text" value="default text">
    
             <h3>The password "thing-a-ma-ding":</h3> 
                It's like a textbox, but the characters are hidden.<br />
                <br />
                <input type="password">
    
             <h3>The checkbox:</h3>
                It's a box that can be checked. If there's a group of them, multiple checkboxes can be selected.<br />
                <ul>
                   <li><input type="checkbox" 
                       id="checkbox1" 
                       name="checkboxes"
                       value="checkbox number one">
                   <label for="checkbox1">Checkbox Number One</label>
                   </li>
                   <li><input type="checkbox"
                       id="checkbox2"
                       name="checkboxes"
                       value="checkbox number two">
                   <label for="checkbox2">Checkbox Number Two</label>
                   </li>
                   <li><input type="checkbox"
                       id="checkbox3"
                       name="checkboxes"
                       value="checkbox number three">
                   <label for="checkbox3">Checkbox Number Three</label>
                   </li>
                </ul>
    
             <h3>A "pre-checked" checkbox:</h3>
                This is exactly like the previous one, just "pre-checked."<br />
                <br />
                <input type="checkbox"checked>
    
             <h3>The radio button:</h3>
                This is similar to a checkbox, except when they are in a group, only one of them can be selected at a time.<br />
                <ol>
                   <li><input type="radio"
                        id="radio1"
                        name="radioButton" 
                        value="option number one"checked>
                   <label for="radio1">Option Number One (I've been pre-checked, by the way)</label>
                   </li>
                   <li><input type="radio" 
                        id="radio2"
                        name="radioButton" 
                        value="option number two">
                   <label for="radio2">Option Number Two</label>
                   </li>
                   <li><input type="radio"
                        id="radio3" 
                        name="radioButton" 
                        value="option number three">
                   <label for="radio3">Option Number Three</label>
                   </li>
                </ol>
    
             <h3>The submit button:</h3>
                It's a button where the section in the quotes after 'value=' determines what it says.<br />
                <br />
                <input type="submit" value="Value on a button thing"> 
    
             <h3>The textarea:</h3>
                An area for text.<br />
                <textarea rows="10" cols="30">I'm adjustable, so that I can meet your needs.</textarea>
    
             <h3>The select "thing-y's":</h3>
                This is much like a radio button, since you are only able to check one of the options.<br />
                The only difference is the way it "interacts" with the user.<br />
                After clicking on a box-like object such as the one located below, the user is presented with a host of options, each of which are simply clicked on to be checked.<br />
                Once that has happened, the previously checked option is replaced with the newly checked one.<br />
                The option menu is then terminated, and the box-like object is filled with the label of the newly checked option.<br /> 
                <br />
                <select>
                   <option>Checkable Thing Number One</option>
                   <option>Checkable Thing Number Two</option>
                   <option>Checkable Thing Number Three</option>
                </select>
    
          <h2>Links:</h2>
             <a href="http://localhost/HTMLstuff.html/ETFC">My Formatted Content</a><br />
             <a href="http://localhost/HTMLstuff2.html/ETWP">Web Page</a>
             <br />
          <h2>Data From Redis:</h2>
            <h3>The data which is under this line changes depending on what page you start at, and where you end up after clicking a link:</h3>
               ${varia}
      
    </body>
    </html>`)
})

//The following is the "Web Page" page
app.get('/HTMLstuff2.html/:variable2', async (req, res) => {
    if (req.params.variable2 == 'CTWP') {
        await db.set('variable2', 'Jumped from "My Formatted Content" to "Web Page."')
    } else if (req.params.variable2 == 'ETWP') {
        await db.set('variable2', 'Jumped from "Form Experimentation" to "Web Page."')
    } else {
        await db.set('variable2', 'You typed this URL into your browser manually, right?')
    }
    const variab = await db.get('variable2')
    console.log(variab)
    //On lines 200 and 205, scr="" is supposed to show where the location of an image is, but I didn't include any
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Web Page</title>
    </head>
    <body>
        <h1>Web Page</h1>
            <h2>Images:</h2>
                <img scr=""
                     width="90"
                     height="120"
                     alt="Non-Existant Picture Number One" />
                <br />
                <img scr=""
                     width="90"
                     height="120"
                     alt="Non-Existant Picture Number Two"<br />
            
            <h2>Links:</h2>
                <a href="http://localhost/HTMLstuff.html/PTFC">My Formatted Content</a><br />
                <a href="http://localhost/HTMLstuff1.html/PTFE">Form Experimentation</a>
                <br />
            <h2>Data From Redis:</h2>
                <h3>The data which is under this line changes depending on what page you start at, and where you end up after clicking a link:</h3>
                    ${variab}
    </body>
    </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})