let express = require('express');
let app = express();

let data = require('./data/data.json');


// data.speakers.forEach(function(item){
//     console.log(item.title);
// })

app.set('appData', data);

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/artist'));


app.listen(3000, ()=>{
    console.log("listening on port 3000");

})