
0. change the path below to one that is in your OS. chomod 755 to makeTemplate.sh 
mydir="/Tasks/vicky/Desktop/DOJO_all/MEAN/IMPORTANTTEMPLATE"

1. Rename server/models/task.js to match your table name in the database
2. Rename and modify staff  inside the server/models/task.js to match your table fields

5. In server/controllers/mainController.js rename the following:

let Task = mongoose.model('Task');  --> let Task = mongoose.model('What ever your name is');

Task.find({}, (err, data) => {   --->  <What ever your name is> .find({}, (err, data) => {

6. In client/view/header.ejs check the routes and rename them appropriatelly to login, logout, register,etc

