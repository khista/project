const express=require('express');
const app = express();
const port = 3000;

const home = require('./home');
const user = require('./user');

app.use('/',home);
app.use('/user',user);

app.listen(port,()=>{
    console.log(`The server running on port ${port}`)
})