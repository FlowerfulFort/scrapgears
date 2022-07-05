const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 23400;
app.use('/public', express.static(path.resolve(__dirname, 'dist', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Testapp listening on port ${port}`);
});
