let express = require('express');
let router = express.Router();

var data = require('../data/data.json');

router.get('/', (req, res) => {


    var artist = data.album;
    var pagePhotos = [];
    
    artist.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
      });

      
      res.render('layout', {
        pageTitle: 'samson',
        artwork: pagePhotos,
        artist: artist,
        pageID: 'home'
      });



    // res.send(`
    //     <h1>front page</h1>

    //         <img src="/images/artist/sheeran.jpg" style="height: 400px;" >
           

    
    // `)

})



module.exports = router;