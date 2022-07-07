const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const port = 23400;

// Default account
if (!fs.existsSync('account.dat')) {
    fs.writeFileSync(
        'account.dat',
        crypto.createHash('sha256').update('admin-admin').digest('hex')
    );
}
app.use('/public', express.static(path.resolve(__dirname, 'dist', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Testapp listening on port ${port}`);
});
