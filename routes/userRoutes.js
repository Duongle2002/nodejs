const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getSearchPage);

router.get('/search', userController.searchUsers);

router.get('/user/:id', userController.getUserDetail);

router.get('/api/users', userController.getAllUsers);

router.get('/api/users/:id', userController.getAllUsersDetail);

module.exports = router;
