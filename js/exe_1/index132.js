/* 
 
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Logan
Show the following message only if Logan and Professor X are mutants items:
We love X-Men
Show the following message only if Gambit is not a mutants items:
X-Men sucks 
*/

const mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix','Logan'];
if(mutants.indexOf('Phoenix')){
    console.log('We love X-Men');
}

if(! mutants.indexOf('Gambit')){
    console.log('X-Men sucks');
}