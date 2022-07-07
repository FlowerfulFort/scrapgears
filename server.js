const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const port = 23400;
app.use(cors());
app.use(express.json());
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

app.post('/api/login', (req, res) => {
    console.log(`Login Request ID: ${req.body.id}`);
    console.log(`Login Request PW: ${req.body.pw}`);
    res.send('Yes');
});
app.listen(port, () => {
    console.log(`Testapp listening on port ${port}`);
});
