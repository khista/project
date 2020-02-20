/* 
Select the ul element
Remove each list item starting from the last item until the first one
(first remove milk, then lettuce and so on..)
Use a iterator to accomplish this task 
*/
let ul = document.querySelector('ul');
for(let index=6;index>=0;index--){
    let list = ul.children.item(index);
    console.log(index);
    ul.removeChild(list);
    list ='';
     
}