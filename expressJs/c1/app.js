const express = require('express'); // Module added for express
const port = 1234;
const app = express();  

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log('Server Started');
});
