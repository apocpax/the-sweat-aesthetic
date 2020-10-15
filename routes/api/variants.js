var express = require('express');
var router = express.Router();
var variantsCtrl = require('../../controllers/api/variants');

router.get('/', variantsCtrl.index)
router.post('/', variantsCtrl.create)
router.delete('/productvariants/:id', variantsCtrl.deleteMany)

module.exports = router;