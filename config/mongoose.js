// require library
const mongoose=require('mongoose');
// connecting mongoose to mongodb
mongoose.connect('mongodb://localhost/todo_app_db');

// check the connection mongodb connected or not
const db=mongoose.connection;
// check if any error found in connection
db.on('error',console.error.bind('this is an error connecting to mongodb'));

// if not error occuerd
db.once('open',()=>{
    console.log('sucessfully connected to db')
})
