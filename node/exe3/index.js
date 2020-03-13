/* Create the following folder/file structure:
/ex_3
  |-- index.js
Init an NPM project inside the ex_3 folder
Use ex_3 as project name
Read the logplease module documentation and learn to use it
Install the logplease module as dev dependency
Configure the start script so it runs index.js
index.js
Show the following output using the logplease module
Hello Node.js (use debug method)
Node.js is great!! (use info method)
Warning, Warning, I think we have a Warning (use warn method)
Mayday Mayday, we have an errro, repeat.. we have an error (use error method) 
*/

const Logger = require('logplease');
const showLog = Logger.create('Error about array');
showLog.debug('Hello Node.js using debug method');
showLog.info('Node.js is great!!!');
showLog.warn('I think we have a warning ');
showLog.error('We have an error repeat...');





/* 
const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hello Node.js (use debug method)`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`Node.js is great!! (use info method)`);
logger.warn(`Warning, Warning, I think we have a Warning (use warn method)`);
logger.error(`Mayday Mayday, we have an errro, repeat.. we have an error (use error method)`); 
  */