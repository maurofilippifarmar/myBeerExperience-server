import jwt from 'jsonwebtoken';
import UserCollection from '../models/userModels.js';

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        // verify this token
        const payload = jwt.verify(token, process.env.JWT_SECRET); // return the payload

        // find the user by id
        const user = await UserCollection.findById(payload._id);

        // attaching user in request object
        req.user = user;
        next()

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

