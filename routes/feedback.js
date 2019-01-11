let express = require('express');
let router = express.Router();

router.get('/feedback', function(req, res) {

    res.render('feedback', {
        pageTitle: 'Leave us a message!',
        pageId: 'feedback'
    });
});

module.exports = router;