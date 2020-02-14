/* Create a basic HTML document
Create a script tag on the document head element
Add the following html code
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Selectors</title>
</head>
<body>
<h1>Welcome to JS Browser Side!!!</h1>
<p id="important">In this course section we learn how to build interactive documents</p>
<p>Also we're going to use HTML, CSS &amp; JavaScript</p>
<p class="blue">Look, a blue text</p>
<div>
<ul>
<li>
<a href="https://developer.mozilla.org/es/docs/DOM">MDN</a>
</li>
<li>
<a href="https://www.w3.org/DOM/">W3C</a>
</li>
<li>
<a href="https://www.w3schools.com/js/js_htmldom.asp">W3C School</a>
</li>
</ul>
</div>
</body>
</html>
Select the element with the important id using getElementById selector
Select all elements that are inside a list item element using querySelectorAll
Select the ul element using querySelector
Select the element with the blue class use the proper selector
Show all selected elements using console.log as output */
let important = document.getElementById("important");
console.log(important);
let selectli = document.querySelectorAll('li');
console.log(selectli);
let selectul=document.querySelector('ul');
console.log(selectul);
let selectBlue = document.querySelectorAll('.blue');
console.log(selectBlue);


