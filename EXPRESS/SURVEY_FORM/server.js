const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

const server = app.listen(8000);
const makeSocket = require('socket.io');
const io = makeSocket(server);
var counter = 0;

io.on('connection', function (socket) { //2
    counter++;

    //console.log(socket);
    toresult = socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
      console.log(data.msg, counter); //8 (note: this log will be on your server's terminal)
    });
});

app.get('/survey', (req, response) => {
   response.render('survey.ejs');
});

var mydata='';

app.post('/new', (req, res) => {
    mydata = req.body;
    console.log(req.body) ;
    res.redirect('/result');
});

app.get("/result" , (req, response) => {     
    response.render('result',{result:mydata});
});

//app.listen(8000, () => console.log("listening on port 8000"));