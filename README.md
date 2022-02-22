## Mock API using MongoDB, Node JS, Express, Heroku

### Setup

1. Install npm project `npm init -y`
2. Install express package `npm install express`
3. Install nodemon package `npm install nodemon`
4. Update .gitignore for node_modules
5. Create "stardev":"nodemon app.js" script
6. Add "type":"module" to package.json for using ES6 modules
7. Create app.js file with the following content:

```javascript
import express from 'express';

const app = express();

// ROUTES
app.get('/', (req, res) => {
	res.send('Hello MockApi Node JS!');
});

app.get('/products', (req, res) => {
	res.send('Hello from /products endpoint!');
});

// start the server - on port 3000
app.listen(3000);
```

8. Open the browser and go [here](http://localhost:3000);

### Middleware

```javascript
// MIDLEWARE
app.use('/products', () => {
	console.log('/products endpoint was accessed');
});
// specific function running when /products endpoint is reached
```
