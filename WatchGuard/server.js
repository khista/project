const express = require('express');
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = 3000;

//connection to clud mongoose.
   const connectionDB = require('./mongooseConnection/connectionDB'); 
   connectionDB();

//setup to access pug files.
   app.set('view engine','pug');

//setup assist folder to clients
   app.use('/',express.static('public'));



// setup upload folder here
   const upload = multer({dest:'public/img/guards'});
//access index file here

const guard=[
   {id: 1,name:'Ahmad', address:'Elwell st', phone:7786285185, email:'khista.rahman@gmail.com', image:'khista.jpg'},
   {id: 2,name:'khan', address:'Elwell st 234', phone:7786285185, email:'khista.rahman@gmail.com', image:'khista.jpg'},
   {id: 3,name:'jan', address:'Elwell st 345', phone:7786285185, email:'khista.rahman@gmail.com', image:'khista.jpg'}
]

//access home page
    app.get('/', function(req,res){
       res.render('index',{list:guard});
   });
//access create file here
   app.get('/create',function(req,res){
       res.render('creates');
   });
   
//add guard to list
   app.post('/create',upload.single('file'),function(req,res){
       const newID = guard[guard.length-1].id+1;
       const newGuard ={
           id:newID,
           name:req.body.name,
           phone:req.body.phone,
           email:req.body.email,
           address:req.body.address,
           image:req.file.filename
       }
       guard.push(newGuard);
       res.redirect('/');

   });

//click on perGuard for more details
   app.get('/guard/:id',function(req,res){
       const slectID = req.params.id;
      let slectGuard =guard.filter(security=>{
          return security.id === +slectID;
       });
       slectGuard = slectGuard[0];
       res.render('perGuard',{aGuard:slectGuard});
   });

//Delete guard profile
    app.get('/delete/:id',function(req,res){
       let selectID = req.params.id;
        function selectIndex(index){
           return index.id == selectID;
       }; 
       let indexNumber = guard.findIndex(selectIndex);
        guard.splice(indexNumber,1);
        res.redirect('/');
   }); 
// edite guard profile
   app.get('/edit/:id',function(req,res){
       const selecID = req.params.id;
       const selectGurd = guard.filter((member)=>{
           return member.id == selecID;
       });
       res.render('edit',{pGuard:selectGurd});
   });
//accept post from edite page
   app.post('/edit/:id', upload.single('file'),function(req,res){
       const updatetid=req.params.id;

       var updateDetails={
           id:updatetid,
           name:req.body.name.toUpperCase(),
           phone:req.body.phone,
           email:req.body.email,
           address:req.body.address,
           image:req.file.filename
       }
       let findindex = guard.findIndex(person=>person.id ==updatetid);
       console.log(findindex);
       guard.splice(findindex,1,updateDetails);
      console.log(updateDetails);

       
       /* guard.splice(filter,updateDetails,1); */

       res.redirect('/');
   });



//server listening on port and start here 
   app.listen(port,function(){
       console.log(`Server running on ${port} port`);
   });


