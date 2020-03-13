/* Create the following folder/file structure:
/ex_11
  |-- index.js
  |-- index.html
  |-- products.html
index.js
Create a Express web server using port 3000
Create the following routes:
GET '/': send the index.html file
GET '/products': send the products.html file
index.html
Create an HTML document
Create an h1 element with the Home text as content
Create an h2 element with Lorem Ipsum as content
Create three paragraph elements with random lorem ipsum text (you can google the site or look to the HTML docs)
Create a link element to link to products.html and add Products text as content
products.html
Create an HTML document

Create an h1 element with the Products text as content

Add a table element with 10 products that you'll like to get

The table columns must be product name, price and store name

Create a link element to link to index.html and add Home text as content

Open the browser and call:

localhost:3000 (get index.html)
localhost:3000/products (get products.html)
Make sure that the links work fine */

const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

const logger = require('logplease');
const getMess = logger.create('Message:');
const onelinerjoke= require('one-liner-joke');


app.get('/index',function(req,res){
    res.sendfile(path.join(__dirname,'index.html'));
});
app.get('/products.html',function(req,res){
    res.sendfile(path.join(__dirname,'products.html'));
});
app.get('/',function(req,res) {
    const getjoke = onelinerjoke.getRandomJokeWithTag('IT');
    res.send(`Jokes: ${ getjoke.body}`);
});

app.listen(port,function(){
    console.log(`This server running on port ${port}`);
    getMess.info(`Server running normal with out any issue`);
})

