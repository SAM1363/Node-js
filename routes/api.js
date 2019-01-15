var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var Fdata = require('../data/feedback.json');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/api', (req, res) =>{
    res.json(Fdata);
});

router.post('/api',(req, res)=>{
    Fdata.unshift(req.body);
    fs.writeFile('data/feedback.json', JSON.stringify(Fdata), 'utf8',(err)=>{
        if(err){
            console.log(err);
        }
    })
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.message);
    res.json(Fdata);
});

router.delete('/api/:id', function(req, res){
    Fdata.splice(req.params.id, 1);
    fs.writeFile('data/feedback.json', JSON.stringify(Fdata), 'utf8',
    (err)=>{
        if(err){
            console.log(err);
        }
    })
})

module.exports = router;