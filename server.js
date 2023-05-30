const express = require('express');
const crypto = require('crypto');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/generate', (req, res) => {
    // Create a buffer of 32 bytes (256 bits) and convert it to a hex string.
    const key = crypto.randomBytes(32).toString('hex');
    res.json({
        key
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));