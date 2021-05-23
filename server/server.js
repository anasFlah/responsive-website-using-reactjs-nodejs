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


////savnig data from signup component//////////
app.post('/SignUp', async(req,res)=>{

  const user = new users(req.body);
  try{
    const users = await user.save();
    if(!users)
      throw new Error('saving has failed');
      res.status(200).json(users);
    
  }catch(error){
  res.status(500).json({message:error.message})
  }
})


///////////get method/////////
app.get('/',(req,res)=>{
    console.log('get method working');
})


  ////////////listen to port//////////
  app.listen(port,()=>{console.log('your port is working on 6969')});