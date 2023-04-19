import { Schema, model } from 'mongoose';

const beerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        brewerName: {
            type: String,
            required: true,
        },
        beerStyle: {
            type: String,
            
        },
        tagline: {
            type: String,
        },
        first_brewed: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
        },
        abv: {
            type: Number,
            required: true,
        },
        ibu: {
            type: Number,
        },
        target_fg: {
            type: Number,
        },
        target_og: {
            type: Number,
        },
        ebc: {
            type: Number,
        },
        srm: {
            type: Number,
        },
        ph: {
            type: Number,
        },
        attenuation_level: {
            type: Number,
        },
        volume: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
            },
        },
        boil_volume: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
            },
        },
        method: {
            mash_temp: [
                {
                    temp: {
                        value: {
                            type: Number,
                        },
                        unit: {
                            type: String,
                        },
                    },
                    duration: {
                        type: Number,
                    },
                },
            ],
            fermentation: {
                temp: {
                    value: {
                        type: Number,
                    },
                    unit: {
                        type: String,
                    },
                },
            },
            twist: {
                type: String,
            },
        },
        ingredients: {
            malt: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        value: {
                            type: Number,
                        },
                        unit: {
                            type: String,
                        },
                    },
                },
            ],
            hops: [
                {
                    name: {
                        type: String,
                    },
                    amount: {
                        value: {
                            type: Number,
                        },
                        unit: {
                            type: String,
                        },
                    },
                    add: {
                        type: String,
                    },
                    attribute: {
                        type: String,
                    },
                },
            ],
            yeast: {
                type: String,
            },
        },
        food_pairing: [
            {
                type: String,
            },
        ],
        brewers_tips: {
            type: String,
        },
        contributed_by: {
            type: String,
        },
    },
    {
        timestamps: true,
        __v: false,
    }
);

const BeerCollection = model('beers', beerSchema);
export default BeerCollection;
