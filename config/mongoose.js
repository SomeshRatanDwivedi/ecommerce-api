const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://somesh:1vM3kfBrY7SBSq82@cluster0.1ubo1xd.mongodb.net/test");

const db=mongoose.connection;

db.on('error', console.error.bind(console, "err in connecting database"));

db.once('open', ()=>{
    console.log("db is connected successfully")
})

