const health = require('../Controllers/health');

const router = require('express').Router(); 


router.route('/health').get(health);


module.exports = router;