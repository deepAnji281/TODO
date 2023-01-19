const express=require('express');
const app=express();
const port=4000;
app.use(express.urlencoded());
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./view');

app.use(express.static('./assets'));

app.listen(port,(err)=>{
    if(err){
        console.log(`error occuring in the server run ${err}`);
        return;
    }
    console.log(`server is running at ${port}`);
})