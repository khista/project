/* Create the following folder/file structure:
/ex_10
  |-- index.js
index.js
Create a Express web server using port 3000
Create the following route handlers and send the corresponding response back
Routes:
GET /: show a welcome message
GET jokes: show at least 2 jokes
GET joke: show 1 joke
POST joke: my jokes are too funny, I'm not getting new ones from you..
PUT joke: no, no, no.. not changing my act dude!
DELETE: joke: good jokes never get to old
All: joke: I know I'm so good that you're looking for jokes everywhere
Use Postman to try all this options
You can use one-liner-joke module to create the jokes */

const express = require('express');
const port = 3000;
const app = express();

const getJoke = require('one-liner-joke');
const getRandomjoke = getJoke.getRandomJokeWithTag('IT');

app.get('/',function(req,resp){
    resp.send(`Hello Welcome this page!!`);
});
app.get('/jokes',function(req,resp){
    resp.send(getRandomjoke);
});
app.get('/joke',function(req,resp){
    resp.send(getRandomjoke);
});
app.post('/joke',function(req,resp){
    resp.send(getRandomjoke);
});
app.delete('/jokes',function(req,resp){
    resp.send(getRandomjoke);
});
app.all('/joke',function(req,resp){
    resp.send(getRandomjoke);
});













app.listen(port,function(){
    console.log(`This server running on port ${port}`);
})