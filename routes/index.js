
const express=require("express");
const router=express.Router();
console.log('router loaded');

const homeController=require('../controller/home_controller');
const inputContorller=require("../controller/input_controller");

router.get('/',homeController.home);
router.post('/add-task',(req,res)=>{
  inputContorller.push(req.body);
  console.log(req.body);
  return res.redirect('back');

});
module.exports=router;