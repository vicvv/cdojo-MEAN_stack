const express = require('express');
      path = require('path');
      bodyParser = require('body-parser');
      app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname + '/angular/dist/angular')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(7000, function(){console.log('Server started on port 7000...');});

