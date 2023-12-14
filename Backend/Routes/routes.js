const health = require('../Controllers/health');
const register = require('../Controllers/register');
const login = require('../Controllers/login');
const jobPost = require('../Controllers/jobPost');
const auth = require('../Middleware/auth');
const jobView = require('../Controllers/jobView');
const jobUpdate = require('../Controllers/jobUpdate');
const postDiscrip = require('../Controllers/postDiscrip');

const router = require('express').Router(); 


router.route('/health').get(health);
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/jobPost',auth).post(jobPost);
router.route('/jobView').get(jobView);
router.route('/jobUpdate').put(jobUpdate);
router.route('/postDiscrip').get(postDiscrip);

module.exports = {health, register, login, jobPost, auth, jobView, jobUpdate, postDiscrip};