const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(1337);
const makeSocket = require('socket.io')
const io = makeSocket(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
    counter++;
    //console.log(socket);
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
      console.log(data.msg, counter); //8 (note: this log will be on your server's terminal)
    });
});






// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + '/public'));
// const server = app.listen(1337);
// const io = require('socket.io')(server);
// var counter = 0;

// io.on('connection', function(socket){

//     socket.emit('greeting',{ msg: 'Creeting from server node'});
//     socket.on('thank you', function(data){
//         console.log(data.msg);
//     });
// });
