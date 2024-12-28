const express = require('express');
const { getUsers, getUser, createUserController, updateUserController, deleteUserController } = require('../controllers/usersController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
