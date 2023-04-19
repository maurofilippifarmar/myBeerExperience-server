import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { rules } from '../middleware/validators.js';
import {
    deleteUser,
    getAllUsers,
    getSingleUser,
    loginUser,
    refreshPage,
    registerUser,
    updateUser,
} from '../controllers/usersController.js';
const router = express.Router();

// get all users
router.get('/allusers', auth, isAdmin, getAllUsers);

//post request to add a new user
router.post('/register', rules, registerUser);
//post request for login
router.post('/login', auth, loginUser);

// verify token on page refresh
// get users n page refresh
router.get('/refreshpage', auth, refreshPage);

//get single user
router.get('/:id', auth, isAdmin, getSingleUser);

// patch request update user
router.patch('/:id', auth, isAdmin, updateUser);

// delete request delete user
router.delete('/:id', auth, isAdmin, deleteUser);
export default router;
