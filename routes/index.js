
const express=require("express");
const router=express.Router();
console.log('router loaded');

const homeController=require('../controller/home_controller');
const inputContorller=require("../controller/input_controller");
const db=require("../config/mongoose");
const tasks=require("../models/schema");
const { application } = require("express");

router.get('/',homeController.home);
router.post('/add-task',(req,res)=>{
  
  tasks.create({
    task:req.body.task,
    due:req.body.due,
    category:req.body.category
  },(error,newTask)=>{
    if(error)
    {
      console.log(error);
      return;
    }
    console.log('new task added',newTask)
    
  })
  
  return res.redirect('back');

});
router.get('/delete-task/',(req,res)=>{
  let id=req.query.id;
 
  
  tasks.findByIdAndDelete(id,(error)=>{
    if(error)
    {
      console.log("error found to find id",error);
      return;
    }

  })
  
  return res.redirect('back');

})
module.exports=router;