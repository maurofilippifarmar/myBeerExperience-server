import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { addBeer, deleteBeer, getAllBeers, getBeersFromBrewery, getRandomBeer, getSingleBeer, updateBeer } from '../controllers/beersController.js';
const router = express.Router();

//get a random beer
router.get('/randombeer', getRandomBeer);
// get all beers
router.get('/allbeers', getAllBeers);
//get all beers from a brewery
// router.get("/likebeer/:id", auth, likeBeer);

// router.get("/unlikebeer/:id", auth, unlikeBeer);

// router.get("/gettry/:id", auth, getTry);

// router.get("/getdrink/:id", auth, getdrink);
// "/userbeers/abc?likedrink=true&unlikedrink=false&try=false&drink=false"
router.get("/userbeers/:id", auth, usersBeersData)

// post request to add a new beer
router.post('/addbeer', auth, addBeer);

router.get('/brewery/:brewery', getBeersFromBrewery);
// get single beer
router.get('/:name', getSingleBeer);
// patch request to update a beer
router.patch('/:name', auth, updateBeer)
// delete request to delete a beer
router.patch('/:name', auth, isAdmin, deleteBeer)






export default router;