const router = require('express')();
const authController = require('../controllers/authController');

router.post('/register',
  authController.createUser,
  (req, res) => res.json(res.locals.user)
);


module.exports = router;