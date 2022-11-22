const express = require('express');
const router = express.Router()
const app = express()
const path = require("path");
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
app.use(express.static('public'))


const YOUR_DOMAIN = 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
   
    const line_items = req.body.cart.map(product => {
        return {
            price_data: {
                currency: "eur",
                product_data: {
                    name: product.name,
                    images: ['http://www.noudvandun.com/images/discofull.jpg'],
                    metadata: {
                        id: product._id
                    },
                    description: product.technique
                },
                unit_amount: product.price * 100,   // in cents = 20.00 dollar
            },
            quantity: product.numberOfUnits,
        }
    });

    const session = await stripe.checkout.sessions.create({

        // payment_method_types: ["ideal", "card", "bancontact"],
        shipping_address_collection: {
            allowed_countries: ["NL"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "eur",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "eur",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },

        line_items,
        mode: 'payment',
        success_url: "http://localhost:3000/checkoutsuccess",
        cancel_url: "http://localhost:3000/cart",
    });
    res.send({ url: session.url });
});


module.exports = router


