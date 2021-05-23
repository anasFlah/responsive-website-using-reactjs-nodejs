const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 6969 ;






app.use(cors());
////////connecting mongoose//////
mongoose.connect('mongodb://localhost:27017/mybase',
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
  }).then(()=>{
     console.log("mongoose Run Succefully");
  }).catch(()=>{
    console.log("Error in the code");    
  })




  
///////////get method/////////
app.get('/',(req,res)=>{
    console.log('get method working');
})


  ////////////listen to port//////////
  app.listen(port,()=>{console.log('your port is working on 6969')});