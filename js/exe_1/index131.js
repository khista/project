/* 
Create a new index131.js file
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
Each femaleStudents name using numeric indexes
Each maleStudents name using while
Each students name using for
*/

const femaleStudents = ['Ahamd','Suhil','Yasir','Jamil','Waheed'];
const maleStudents =['good','nice','weed','noor','tadg'];
const allStudent = femaleStudents.concat(maleStudents);
allStudent.sort();
let index = allStudent.length;
while(index>=0){
    console.log(allStudent[index]);
    index--;
}
for(let x = 0 ;x <allStudent.length;x++){
    console.log(x+'  '+allStudent[x]);
}




 