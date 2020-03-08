/* 
Define a propertiesNames array and assign the following string values: name, price, sold & console
Copy and paste the games array from exercise 155
Iterate over the games array
Show each game properties value using the properties names defined in the propertiesNames array
Use the propertiesNames as dynamic properties accesor for the games array
*/

propertiesNames=['name','price','sold','console'];
const Games=
[
     
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4'

        
    },
    {   name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX'
    }
];
console.log('*******************');
Games.forEach(function(game){
    
    console.log(`Name: ${game[propertiesNames[0]]}`);
    console.log(`Price: ${game[propertiesNames[1]]}`);
    console.log(`Sold: ${game[propertiesNames[2]]}`);
    console.log(`Console: ${game[propertiesNames[3]]}`);
    console.log('*******************');
});
 