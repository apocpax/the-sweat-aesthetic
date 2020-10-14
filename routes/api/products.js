var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/api/products');

router.get('/', productsCtrl.index);
router.post('/', productsCtrl.create)
router.delete('/:id', productsCtrl.deleteOne)
router.put('/:id', productsCtrl.update)


module.exports = router;