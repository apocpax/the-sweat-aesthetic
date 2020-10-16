var express = require('express');
var router = express.Router();
var variantsCtrl = require('../../controllers/api/variants');


/*---------- Public Routes ----------*/
router.get('/', variantsCtrl.index)
router.put('/:id', variantsCtrl.updateInventory)

/*---------- Protected Routes ----------*/

router.use(require('../../config/auth'));
router.post('/', checkAuth, variantsCtrl.create)
router.delete('/productvariants/:id', checkAuth, variantsCtrl.deleteMany)

/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;