const express = require('express');
const router = express.Router();
const history = new Map();


router.get("/",function(req,res, next){
    res.send(history);
});


router.put('/', (req, res) => {
    console.log(req.body)
    res.status(400).send("Not implemented yet");
});

module.exports = router;