//exe_113

/* 
Define the function getShapePerimeter that accepts 2 parameters: base and height
If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle
This function returns a number that represents the shape perimeter
Show the following output: %perimeter% is the shape perimeter
If the perimeter is bigger than 100 then show the following output: The perimeter is too big
Else show the following message: The perimeter is fine
Call this function a couple of times with different values
Test all posible cases
 */

 let getShapePerimeter =function(base,height){
     
    
     if(base>=100 || height >=100){
        console.log( `The perimeter is too big`)
    }else if(base == height){
         let result = (base * height);
         console.log(result);
     }else if(base != height){
         let area = 0.5 * base * height;
         console.log(`This is trangle ${area}`);
     }else{
         console.log("invlaid entry");
     }

 }

 getShapePerimeter(90,100);