var express = require('express');
var router = express.Router();
var variantsCtrl = require('../../controllers/api/variants');

router.get('/', variantsCtrl.index)
router.post('/', variantsCtrl.create)

module.exports = router;