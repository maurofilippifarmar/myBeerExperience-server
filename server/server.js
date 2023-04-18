import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js';
import beerRoute from './routes/beerRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

    //fetch from API
fetch('https://api.punkapi.com/v2/').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })}).catch((err) => {
        console.log(err);
    });

app.use('/user', userRoute)
app.use('/beer', beerRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
