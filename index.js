const express = require('express');
const app = express();
const port = 8000;
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server started and running on port: ${port}`);
})