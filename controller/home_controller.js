const inputContorller=require("../controller/input_controller");
const tasks=require("../models/schema");
module.exports.home=function(req,res){
  return res.render('home',{
    title:"TODO",
    input_arr:tasks,
    
  })
}


