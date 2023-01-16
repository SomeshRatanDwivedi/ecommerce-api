const express=require('express');
const PORT=8000;
const bodyParser=require('body-parser');
const db=require('./config/mongoose')
const app=express();


app.use(bodyParser.urlencoded({extended:true}))


app.use('/', require('./routes'))




app.listen(PORT, ()=>{
    console.log(`app is listening on PORT ${PORT}`)
})