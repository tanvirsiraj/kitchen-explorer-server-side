const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Kitchen Explorer is running');
})


app.listen(port, () => {
    console.log(`Kitchen Explorer is running on Port: ${port}`);
})