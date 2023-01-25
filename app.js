const express = require('express');

const app = express();
const port = 9992;


app.listen(port, () => {
    console.log(port, '서버열림')
});