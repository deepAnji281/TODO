const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    due:{
        type:String,
        required:true
    }
})
const tasks=mongoose.model('tasks',taskSchema);
module.exports=tasks;