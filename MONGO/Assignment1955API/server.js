const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// init App
const app = express();


require('./server/config/mongoose.js');
require('./server/routes/routes.js')(app);

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Start Server
app.listen(8000, function(){console.log('Server started on port 8000...');});

