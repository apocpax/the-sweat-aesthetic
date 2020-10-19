var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/api/products');

router.get('/', productsCtrl.index);
router.post('/', checkAuth, productsCtrl.create)
router.delete('/:id', checkAuth, productsCtrl.deleteOne)
router.put('/:id', checkAuth, productsCtrl.update)

/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;