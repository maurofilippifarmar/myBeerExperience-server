import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { addBeer, deleteBeer, getAllBeers, getBeersFromBrewery, getRandomBeer, getSingleBeer, updateBeer } from '../controllers/beersController.js';
const router = express.Router();

//get a random beer
router.get('/randombeer', getRandomBeer);
// get all beers
router.get('/allbeers', getAllBeers);
// get single beer
router.get('/:name', getSingleBeer);
//get all beers from a brewery
router.get('/brewery/:brewery', getBeersFromBrewery);
// post request to add a new beer
router.post('/addbeer', auth, addBeer);
// patch request to update a beer
router.patch('/:name', auth, updateBeer)
// delete request to delete a beer
router.patch('/:name', auth, isAdmin, deleteBeer)



export default router;