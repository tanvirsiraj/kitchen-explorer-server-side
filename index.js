const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allChef = require('./data/allChef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Kitchen Explorer is running');
})

app.get('/allChef', (req, res) => {
    res.send(allChef);
})

app.listen(port, () => {
    console.log(`Kitchen Explorer is running on Port: ${port}`);
})