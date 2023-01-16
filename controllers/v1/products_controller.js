const Products=require('../../models/products')

module.exports.addNewProduct=(req, res)=>{
    Products.create(req.body, (err, product)=>{
        if(err){
            console.log("err in creating product", err);
            return;
        }

        return res.status(200).json({
            message:"New product is added successfully",
            product:product
        })
    })
}


module.exports.getAllProducts=(req, res)=>{
    Products.find({}, (err, products)=>{
        if(err){
            console.log("err in finding the products", err);
            return;

        }
        return res.status(200).json({data:products})
    })
}

module.exports.deleteProduct=(req, res)=>{
    Products.deleteOne({_id:req.params.id}, (err)=>{
        if(err){
            console.log("err in deleting product", err);
            return;
        }
        return res.status(200).json({message:"Product is deleted"})
    })

}


module.exports.updateQuantity=async(req, res)=>{
    try{
        const product=await Products.findById(req.params.id);
    product.quantity=req.query.number;
    product.save();
    return res.status(200).json({product:product});

    }catch(err){
        console.log("err in updating products", err);
        return;
    }
}

