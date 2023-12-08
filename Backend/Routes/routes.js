const health = require('../Controllers/health');
const register = require('../Controllers/register');
const login = require('../Controllers/login');

const router = require('express').Router(); 


router.route('/health').get(health);
router.route('/register').post(register);
router.route('/login').post(login);


module.exports = {health, register, login};