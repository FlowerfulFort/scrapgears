const express = require('express');
const axios = require('axios');
const app = express();
const port = 23400;
/*
app.get('/', (req,res) => {
    res.send('Hello World from server')
})
*/
console.log('get request send to localhost at port 23456');
axios
    .post('http://127.0.0.1:23456', {
        message: 'post hello',
    })
    .then((res) => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch((err) => {
        console.log('error');
    });
/*
app.listen(port, () => {
    console.log(`Testapp listening on port ${port}`)
})
*/
