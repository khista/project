 /*  reate the following folder/file structure:
/ex_8
  |-- index.js
index.js
Create an HTTP web server using port 3001
Execute an HTTP request to the server using the browser
The server will send the following text as response:
Congrats you're using your first Node.js Web Server
When the server starts it needs to show the following message:
This HTTP server is running on port %port%
In case there's an error show the following message:
Unable to start the server on port %port% */

const http = require('http');
const port=3001;

const userhandler =(requ,respon)=>{
return respon.end(`This is server we provide you 3001 port to acces our web site`);
};

const server = http.createServer(userhandler);

server.listen(port,(error)=> {
    if(error){
        console.log("something happed"+error);}

    console.log(`This server running on port 3001`);
});