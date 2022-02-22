import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import router from './routes/products.js';

const app = express();

// MIDLEWARE
app.use('/products', router);

// connect to DB
mongoose.connect(process.env.MONGO_URI, () => {
	console.log('Connected to Mongo DB!!');
});

// start the server - on port 3000
app.listen(3000);
