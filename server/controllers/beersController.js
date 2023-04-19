import BeerCollection from '../models/beerModel.js';
import UserCollection from '../models/userModels.js';

export const getRandomBeer = async (req, res) => {
    try {
        const beer = await BeerCollection.aggregate([{ $sample: { size: 1 } }]);
        res.status(200).json({ success: true, data: beer });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const getAllBeers = async (req, res) => {
    try {
        const beers = await BeerCollection.find();
        res.status(200).json({ success: true, data: beers });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const likedBeers = async (req, res) => {
    try {
        // ('/userbeers/abc?likedrink=true&unlikedrink=false');
        const { id } = req.params;
        const { likeddrink, unlikedrink } = req.query;
        const user = await UserCollection.findById(req.user._id);
        switch (true) {
            case likeddrink:
                user.beersLiked.push(id);
                break;
            case unlikedrink:
                user.beersDisliked.push(id);
                break;
        }
        // if (likeddrink) {
        //     user.beersLiked.push(id);
        // } else if (unlikedrink) {
        //     user.beersDisliked.push(id);
        // }
        await user.save();
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};
export const tastedBeers = async (req, res) => {
    try {
        ('/userbeers/abc?trybeer=false&drinkbeer=false');
        const { id } = req.params;
        const { trybeer, drinkbeer } = req.query;
        const user = await UserCollection.findById(req.user._id);
        switch (true) {
            case trybeer:
                user.beersToTry.push(id);
                break;
            case drinkbeer:
                user.beersDrinked.push(id);
                break;
        }
        await user.save();
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const getSingleBeer = async (req, res) => {
    try {
        const beer = await BeerCollection.findOne({ name: req.params.name });
        res.status(200).json({ success: true, data: beer });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};
export const getBeersFromBrewery = async (req, res) => {
    try {
        const { brewery } = req.params;
        const brewBeers = await BeerCollection.find({ brewery: brewery });
        res.status(200).json({ success: true, data: brewBeers });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const addBeer = async (req, res) => {
    try {
        const beer = new BeerCollection(req.body);
        await beer.save();
        res.status(201).json({ success: true, data: beer });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const updateBeer = async (req, res) => {
    try {
        const { name } = req.params;
        const updateBeer = await BeerCollection.findOneAndUpdate(
            name,
            req.body,
            { new: true }
        );
        res.status(200).json({ success: true, data: updateBeer });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteBeer = async (req, res) => {
    try {
        const { name } = req.params;
        const deleteBeer = await BeerCollection.findOneAndDelete(name);
        res.status(200).json({ success: true, data: deleteBeer });
    } catch (error) {}
};
