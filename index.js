const express = require("express");
const app = express();
const port = 6060;
const bodyParser = require('body-parser');


// -----  middleware ----- // 
app.use(bodyParser.json());

// ----- importing mongoose.js file ----- //
const db = require('./config/mongoose');

app.get('/', (req, res) => {
   
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the Home Page!');
  });
 
// ----- routes ----- //
app.use('/', require('./routes'))

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});