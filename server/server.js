const express = require('express');
const app = express();
const dotenv = require('dotenv');

try {
    dotenv.config();
} catch (error) {
    console.log(error)
    // throw error;
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))