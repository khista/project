/* 
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
Original mutants list
Sorted mutants list
Reversed mutants list
Mutants name separated by '-'

*/

const mutants = ['Professor X','Cyclops','Iceman','Angel','Phoenix','Beast'];
console.log(mutants.sort());
console.log(mutants.reverse());
console.log(mutants.join(' * '));
console.log(mutants.join('-'));
