import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user'],
    },
    profileImage: {
        type: String,
        default: function () {
            return `https://robohash.org/${this.userName}`;
        },
    },
    beersDrinked: [{ type: Schema.Types.ObjectId, ref: 'beers' }],
    beersToTry: [{ type: Schema.Types.ObjectId, ref: 'beers' }],
    beersLiked: [{ type: Schema.Types.ObjectId, ref: 'beers' }],
    beersDisliked: [{ type: Schema.Types.ObjectId, ref: 'beers' }],
},
{
    timestamps: true,
    __v: false,
    });

userSchema.indexes({ email: 1 });

const UserCollection = model('users', userSchema);

export default UserCollection;
