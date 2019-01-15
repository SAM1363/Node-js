var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var io = require('soket.io')();

app.set('view engine', 'ejs');
app.set('port', proccess.env.PORT || 3000);
app.set('appData', dataFile);
app.set('views', 'app/views');

app.locals.siteTitle = 'Ed Sheeran';
app.locals.allAlbums = dataFile.albums;


app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/artist'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));


var server = app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
    
});

io.attach(server.app);
io.on('connection', (socket)=>{
    socket.on('postMessage',(data)=>{
        io.emit('updateMessage', data);
    })
});

reload(server, app);

// app.listen(3000, ()=>{
//     console.log("listening on port 3000");

// })

