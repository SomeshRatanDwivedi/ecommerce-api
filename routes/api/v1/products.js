const express=require('express');
const router=express.Router();

const productsController=require('../../../controllers/v1/products_controller')


router.get('/', productsController.getAllProducts);
router.post('/create', productsController.addNewProduct);
router.delete('/:id', productsController.deleteProduct);
router.post('/:id/update_quantity', productsController.updateQuantity)

















module.exports=router;