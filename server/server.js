const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        orgin: "*"
    }
});

io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    });
});

http.listen(4000, function() {
    console.log('Listening on port 4000')
});