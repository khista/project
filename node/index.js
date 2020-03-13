  const express = require('express');
  const port = 3000;
  const app = express();
  const path = require('path');

  const oneJoke = require('One-liner-joke');
  const getjoke = oneJoke.getRandomJoke();
  const logger = require('logplease');
  const getLog=logger.create('Message');

  
  app.all('/',function(req,res){
       res.sendfile(path.join(__dirname,'info.html'));
  });
 
  app.listen(port,function(err){
      if(err){
          console.log('Error happed to the server request');
      }
      console.log(`This server is runing on port ${port}`);
      getLog.info('Server running normal');
  })

