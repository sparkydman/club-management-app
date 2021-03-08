const router = require('express').Router();
const createClub = require('../controllers/clubs/create-club');
const deleteClub = require('../controllers/clubs/delete-club.');
const getClubById = require('../controllers/clubs/get-club-by-id');
const getMember = require('../controllers/clubs/get-member');
const inviteUser = require('../controllers/clubs/invite-user');
const joinClub = require('../controllers/clubs/join-club');
const removeMember = require('../controllers/clubs/remove-member');
const requireAdmin = require('../middleware/require-admin');
const requireAuth = require('../middleware/require-auth');
const catchError = require('../utils/catch-error');

router.param('clubId', getClubById);

// create club
router.post('/', requireAuth, catchError(createClub));

// delete
router.delete('/:clubId', requireAuth, requireAdmin, catchError(deleteClub));

// invite user
router.post('/:clubId', requireAuth, requireAdmin, catchError(inviteUser));

// remove member
router.post(
  '/:clubId/remove/:memberId',
  requireAuth,
  requireAdmin,
  catchError(removeMember)
);

// join club
router.put('/:invitationToken', requireAuth, catchError(joinClub));

module.exports = router;
