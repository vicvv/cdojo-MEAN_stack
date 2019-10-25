1. Rename server/models/user.js to match your table name in the database
2. Rename and modify everything inside the server/models/user.js to match your table fields
3. Rename routes.js to match your table name but make it plural
4. In your server.js file rename require('./server/routes/routes.js')(app);
   to require('./server/routes/<put your models name here>.js')(app);
5. In server/controllers/mainController.js rename the following:


let User = mongoose.model('User');  --> let User = mongoose.model('What ever your name is');

User.find({}, (err, data) => {   --->  <What ever your name is> .find({}, (err, data) => {

cd angular; ng build --watch