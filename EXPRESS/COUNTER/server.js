const express = require("express");
const app = express();
//app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use( express.static( "images" ) );


app.get('/', (request, response) => {
    response.send('hello');
 });

var counter = 0;
app.get('/counter', (req, response) => {
    counter++;
   response.render('counter.ejs' ,{count:counter});
});

app.listen(8000, () => console.log("listening on port 8000"));