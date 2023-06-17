const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();


router.post('/', productController.save);
router.get('/', productController.fetchAll);
router.get('/:id', productController.getProductById);
router.delete("/:id", productController.deleteById);
router.put("/:id", productController.update);


module.exports = router;