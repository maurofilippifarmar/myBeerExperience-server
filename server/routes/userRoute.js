import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { rules } from '../middleware/validators.js';
const router = express.Router();

// get all users
router.get('/allusers', auth, isAdmin);

//post request to add a new user
router.post('/register', rules);
//post request for login
router.post('/login', auth);

// verify token on age refresh
// get users n page refresh
router.get('/refreshpage', auth, isAdmin);

//get single user
router.get('/:id', auth, isAdmin);

// patch request updtae user
router.patch('/:id', auth, isAdmin);

// delete request delete user
router.delete('/:id', auth, isAdmin);
export default router;
