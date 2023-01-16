const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});



const Products=mongoose.model('Products', productSchema);


module.exports=Products;
