let express = require('express');
let app = express();

// let data = require('./data/data.json');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/artist'));
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))
app.listen(4000, ()=>{
    console.log("listening on port 4000");

})

