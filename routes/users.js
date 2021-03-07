const router = require('express').Router();
const createUser = require('../controllers/users/create-user.js');
const deleteUser = require('../controllers/users/delete-user.js');
const getUserById = require('../controllers/users/get-user-by-id.js');
const getUsers = require('../controllers/users/get-users.js');
const login = require('../controllers/users/login.js');
const upadateUser = require('../controllers/users/upadate-user.js');
const requireAuth = require('../middleware/require-auth.js');
const catchErr = require('../utils/catch-error');

router.param('userId', getUserById);

// get all users
router.get('/', catchErr(getUsers));

// create user
router.post('/', catchErr(createUser));

// login
router.post('/login', catchErr(login));

// update user
router.delete('/:userId', requireAuth, catchErr(upadateUser));

// delete
router.delete('/:userId', requireAuth, catchErr(deleteUser));

// logout

module.exports = router;
