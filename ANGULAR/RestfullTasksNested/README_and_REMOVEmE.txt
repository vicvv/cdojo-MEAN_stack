1. Rename server/models/user.js to match your table name in the database
2. Rename and modify staff inside the server/models/user.js to match your table fields



let User = mongoose.model('User');  --> let User = mongoose.model('What ever your name is');

User.find({}, (err, data) => {   --->  <What ever your name is> .find({}, (err, data) => {

cd angular; ng build --watch