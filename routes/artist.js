let express = require('express');
let router = express.Router();


router.get('/artist', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML = "";

    dataFile.artists.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/artist/${item.pic_name}.jpg" alt="">
            <p>${item.album_title}</p>
        </li>
        `;

    })
    

    res.send(`
    <h1>Artist</h1>
    <ul>
        ${myHTML}
    </ul>
    `)

})


router.get('/artist/:artistID', (req, res) => {
    console.log(req.params.artistID);
    
    let dataFile = req.app.get("appData");
    let myHTML = "";

    let artist_id = req.params.artistID;

    let art = dataFile.artists[artist_id];
    console.log(art)
    
    res.send(`
        <link rel="stylesheet" href="/css/styles.css">
        <h2>${art.name}</h2>
        <img src="/images/artist/${art.pic_name}.jpg" alt="">
        <p>${art.album_title}</p>
    `)

    

})

module.exports = router;