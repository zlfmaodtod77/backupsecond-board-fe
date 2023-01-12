const express = require('express');

const app = express();
const port = 9090;



app.get('/host', (req, res) => {
    res.send("host 요청")
});


app.listen(port, () =>{
    console.log(port, "서버열림");
});