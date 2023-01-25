const express = require('express');

const app = express();
const port = 9090;



app.listen(port, () =>{
    console.log(port, "서버열림");
});

//이게 진짜
