const inputContorller=require("../controller/input_controller");
module.exports.home=function(req,res){
  return res.render('home',{
    title:"TODO",
    input_arr:inputContorller,
    
  })
}


