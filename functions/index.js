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
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payment/create')

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
