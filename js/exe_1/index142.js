/* 
Define a firstPerson variable
Define a secondPerson variable
Assign a new array to each defined variable with the following structure
The first item is the person first name (string)
The second item is the person last name (string)
The third item is the person address (string)
The fourth item is the person age (number)
Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
Compare the strings result to see if they are the same person (if they are they should match)
Try using the same person (with different variables) and also try different people

*/

const firstPerson = ['Ahamd','waheed','7969, Elwell Ave','20'];
const secondPerson =['Moh','Suhil','3920, Khibar St','30'];

var firstP = firstPerson.reduce(function(detail,Valu){
    return detail+Valu;
});

var SecondP = secondPerson.reduce(function(detail,valu){
    return detail+valu;
});

if(firstP === SecondP){
    console.log('Same People');
}else{
    console.log('Not same People');
}