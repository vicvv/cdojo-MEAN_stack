const express = require("express");
const app = express();
//app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (request, response) => {
   response.send('hello');
   //response.render('index.html', {title: " "});
});

app.get('/cats', (req, response) => {
   response.render('cats.ejs');
});
app.get('/cars', (req, response) => {
   response.render('cars.ejs');
});

app.get('/cats/new', (req, response) => {
   response.render('form.ejs');
});


app.listen(8000, () => console.log("listening on port 8000"));

