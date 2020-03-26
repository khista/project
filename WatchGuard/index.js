 const express = require('express');
 const fs = require('fs');
 const multer = require('multer');
 const app = express();
 const port = 3000;
 const mongoose = require('mongoose');
 const connectionDB = require('./mongooseConnection/connectionDB'); 
 connectionDB();

 const GuardPerSechema = mongoose.Schema({
     _id: mongoose.Types.ObjectId,
    name:String,
    address:String,
    phone:String,
    email:String,
    image:String
 });
 const Guard =mongoose.model('Guard',GuardPerSechema);//DB model
  
 app.set('view engine','pug'); //setup to access pug files.
 app.use('/',express.static('public'));//setup assist folder to clients
 const upload = multer({dest:'public/img/guards'});// setup upload folder here
 
 app.get('/', async function(req,res){ //access home page
        const guardsDocument= await Guard.find().exec();
        const indexVar ={
            guards:guardsDocument
        }
        res.render('index',{Variabl:indexVar});
    });

 app.get('/create',function(req,res){  //access create file here
        res.render('creates');
    });

 app.post('/create',upload.single('file'),function(req,res){ //add guard to list
    try{
    const guards = new Guard({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    address:req.body.address,
    phone:req.body.phone,
    email:req.body.email,
    /* image:req.file.filename */
    });
    if(!req.file){
        guards.image='khista.jpg';
    }else{
        guards.image=req.file.filename;
    }
    
    guards.save().then(function(result){
        return console.log(result);
    });
    }catch(err){
        return console.log(err);
    }finally{
        res.redirect('/');
        }
    });

     app.get('/delete/:id',async function(req,res){  //delete guard 
        let getID = req.params.id;
        const grdDoc = await Guard.findById(getID).exec(); 
        deleteImage(grdDoc.image);
        console.log(getID);
        await Guard.deleteOne({_id:getID}).exec();
         res.redirect('/');
    }); 
    
// edite guard profile
    app.get('/edit/:id',async function(req,res){
        try{
        const selecID = req.params.id;
        const findDoc= await Guard.findById(selecID).exec();
      /*   const selectGurd = Guard.findById((member)=>{
            return member.id == selecID;
        }); */
        res.render('edit',{pGuard:findDoc});
        console.log(selecID);
        
    }catch(err){
        console.log(err);
    }
    });

   
//accept post from edite page
    app.post('/edit/:id', upload.single('file'),async function(req,res){
        try{
        const selecToEdit = req.params.id;
        var docToEdit={
            name:req.body.name.toUpperCase(),
            phone:req.body.phone,
            email:req.body.email,
            address:req.body.address
        }
        
        if(req.file){
            docToEdit.image=req.file.filename;
            console.log('Image Uploaded succesfuly to the system....');
        }
       
        const filter = {_id:selecToEdit};
        const FindGaurd = await Guard.findById(selecToEdit).exec();
         

        if( req.file){
            
            deleteImage(FindGaurd.image);
            console.log('old image is deleted')
        }
        Guard.updateOne(filter,docToEdit).exec();
    }catch(err){
        console.log("Error: "+err)
    }finally{
        res.redirect('/');
    }  

    });
   function deleteImage(image){
       const dir=__dirname+"/public/img/guards/"+image;
       if(fs.existsSync(dir)){
            fs.unlink(dir,(err)=>{
                if(err) throw err;
                console.log('Image has deleted secussfully');
            })
       }
        
   }
 

//server listening on port and start here 
    app.listen(port,function(){
        console.log(`Server running on ${port} port`);
    });