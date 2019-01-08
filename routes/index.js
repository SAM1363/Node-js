let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.send(`
        <h1>Artist</h1>

        <img src="/images/artist/sheeran.jpg" style="height: 400px;" >
    
    `)

})



module.exports = router;