const router = require('express').Router();
const createUser = require('../controllers/users/create-user.js');
const deleteUser = require('../controllers/users/delete-user.js');
const getUserById = require('../controllers/users/get-user-by-id.js');
const getUsers = require('../controllers/users/get-users.js');
const login = require('../controllers/users/login.js');
const getMe = require('../controllers/users/get-me.js');
const upadateUser = require('../controllers/users/upadate-user.js');
const requireAuth = require('../middleware/require-auth.js');
const catchErr = require('../utils/catch-error');
const getUser = require('../controllers/users/get-user.js');
const getToken = require('../controllers/users/get-token.js');

router.param('userId', getUserById);

// get all users
router.get('/', catchErr(getUsers));

// create user
router.post('/', catchErr(createUser));

// get login user
router.get('/token', getToken);

// logout
router.get('/logout', requireAuth, (req, res) => {
  res.clearCookie('__refresh_token').redirect('/login');
});

// get login user
router.get('/me', requireAuth, catchErr(getMe));

// get user
router.get('/:userId', requireAuth, catchErr(getUser));

// login
router.post('/login', catchErr(login));

// update user
router.put('/:userId', requireAuth, catchErr(upadateUser));

// delete
router.delete('/:userId', requireAuth, catchErr(deleteUser));

// logout

module.exports = router;
