/* 
Create the following folder/file structure:
/ex_9
  |-- index.js
index.js
Create a Express web server using port 3000
Execute an HTTP request to the server using the browser
The server will send the following text as response:
Congrats you're using your first Node.js and Express as Web Server
When the server starts it needs to show the following message:
This HTTP server is running on port %port%
In case there's an error show the following message:
Unable to start the server on port %port%
Also update the server listen method to use logplease module */

const express = require("express");
const port = 3000;
const app = express();

const logger = require('logplease');
const getDebu= logger.create('Message:');

app.get('/',function(reqes,respons){
    respons.send(`Congrats you're using your first Node.js and Express as Web Server  and ${getDebu.info('This server pass ')}`);
});

app.listen(port,function(error){
    if(error){
        console.log(`Unable to start the server on port ${port}`);
    }
    console.log(`This server is running on the port ${port}`);
   
    getDebu.debug(`This server is update to logplease and running on port ${port}`);
});
