import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
const router = express.Router();

//get a random beer
router.get('/randombeer',);
// get all beers
router.get('/allbeers',);
// get single beer
router.get('/:name',);
// post request to add a new beer
router.post('/addbeer', auth);
// patch request to update a beer
router.patch('/:name', auth)
// delete request to delete a beer
router.patch('/:name', auth, isAdmin)



export default router;