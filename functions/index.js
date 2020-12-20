const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hz8ZcLB7D9v0YrADwDTb3qAy8Fl30KDuxnVxwfDVGEdifgY9SpAkeQSIPEl71fxeIy6pz7vUUMR4LyLb1EKkNaV00TYsMLLAv')


// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('HAHAHAHAH'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received BABY!!! >>>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the currency
        currency: 'usd'
    })

    // OK - Created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/amaclone01/us-central1/api

//-------------------------------------------------------------------------
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
