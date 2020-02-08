/* Define a showName variable and assign a function as value
When the showName function get executed it will print your name with the following output format:
===========
= Nicolás =
===========
Call the showName at least 2 times */


function names(){
    let emptyStr =' ';
    for(let index1 =1; index1<=5;index1++){
        for(let index2=1;index2<=12;index2++){
            if(index1==2 && index2==1){
                Process.stdout.writ(' ');

            }else if(index1=4 && index2==1){
                Process.stdout.writ(' ');
            }else if(index1==3 && index2==2){
                //pint('ComIT');
            }
            //print('=');
            Process.stdout.writ('\n');
        }
    }
}
console.log(names());