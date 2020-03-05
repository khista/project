/* 
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit

First part
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list
Second part
Fin out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position

*/

const mutant = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast',
                'Phoenix','Logan','Gambit'];
 let Magneto = mutant.indexOf('Magneto');

 let index = 0;
 while(index <mutant.length){

    if(mutant[index]==='Magneto'){
        break;
    }else{
        console.log(mutant[index]);
    }
    index++;
 }
 
 while(index <mutant.length){

    if(mutant[index]==='Magneto'){
       mutant.shift('Magneto');
    }else{
        console.log(mutant[index]);
    }
    index++;
 }
