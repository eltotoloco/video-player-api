const express = require('express');
const router = express.Router();
const history = [];


router.get("/",function(req,res, next){
    res.send(history);
});


router.post('/', (req, res) => {
    console.log(req.body)
    history.unshift(req.body)
    res.status(200).send(JSON.stringify(history));
});

module.exports = router;