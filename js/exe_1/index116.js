/* 
Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output

*/

let getHexaColor = function(color){
    switch(color){
        case  'white':
            console.log('#FFFFF');
            break;
        case 'black':
            console.log('#00000');
            break;
        case 'blue':
            console.log('#0b24fb');
            break;
        case 'green':
            console.log('#0e7e12');
            break;
        case 'yellow':
            console.log('#fffd38');
            break;
        case 'pink':
            console.log('#fec1cc');
            break;
        default:
            console.log(`color misMatched`);
            
    }
}

getHexaColor('whitse');
 getHexaColor('yellow');
/* getHexaColor('green');
getHexaColor('ged'); */ 