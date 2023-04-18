import UserCollection from '../models/userModels.js';
import BeerCollection from '../models/beerModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserCollection.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const registerUser = async (req, res) => {
    try {
        const user = new UserCollection(req.body);
        //hashin password
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserCollection.findOne({ email });
        if (user) {
            const verifyPasword = bcrypt.compareSync(password, user.password);
            if (verifyPasword) {
                const token = jwt.sign(
                    { id: user._id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );
                res.header('auth-token', token).json({
                    success: true,
                    data: user,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Invalid password',
                });
            }
        } else {
            res.status(400).json({ success: false, message: 'Invalid email' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const refreshPage = async (req, res) => {
    res.json({ success: true, data: req.user })
}

export const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserCollection.findById(id);
        if (user) {
            res.status(200).json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserCollection.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedUser = await UserCollection.findByIdAndDelete(id);
        res.json({ success: true, data: deletedUser });
    }
    catch (error){
        res.status(400).json({ success: false, message: error.message });
    }
}
