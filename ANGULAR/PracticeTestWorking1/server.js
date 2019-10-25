

const express = require('express');
      path = require('path');
      bodyParser = require('body-parser');
      app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname + '/angular/dist/angular')));


require('./server/config/mongoose.js');
require('./server/routes/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular/dist/angular/index.html"))
});

app.listen(8000, function(){console.log('Server started on port 8000...');});