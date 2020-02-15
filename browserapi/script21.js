/* 

        Select the first list item element and add the orange class
        Using the selected element select the following element using nextElementSibling and add the orange class
        Keep doing this until there's no more siblings
        At the end all elements must have the orange class
        Once you acomplish this task:
        Now we need to go back using previousElementSibling
        Add red class to Item 3
        Add green class to Item 1
        Final result on the browser must be:
        <li class="green">Item 1</li>
        <li class="orange">Item 2</li>
        <li class="red">Item 3</li>
        <li class="orange">Item 4</li>
        <li class="orange">Item 5</li> 
*/

//let li = document.querySelector('li');
//li.setAttribute('class','orange');

let list = document.querySelectorAll('li');
let first = list[0];
first.setAttribute('class','orange');
let second = first.nextElementSibling;
second.setAttribute('class','orange');
let third = second.nextElementSibling;
third.setAttribute('class','orange');
let fourth = third.nextElementSibling;
fourth.setAttribute('class','orange');
let fivith = fourth.nextElementSibling;
fivith.setAttribute('class','orange');

let last3rd = fourth.previousElementSibling;
last3rd.setAttribute('class','red');
let last1st = second.previousElementSibling;
last1st.setAttribute('class','green');

console.log(list);


