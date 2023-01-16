const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/ecommerse-db");

const db=mongoose.connection;

db.on('error', console.error.bind(console, "err in connecting database"));

db.once('open', ()=>{
    console.log("db is connected successfully")
})