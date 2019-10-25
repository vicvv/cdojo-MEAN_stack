
app = require('./server/config/mongoose.js');
// Start Server
app.listen(8000, function(){console.log('Server started on port 8000...');});
require('./server/config/routes.js')(app);

