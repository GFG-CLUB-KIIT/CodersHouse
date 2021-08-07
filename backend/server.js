require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, () =>console.log(`Listning on Port ${PORT}`));