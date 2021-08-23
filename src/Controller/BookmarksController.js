const express = require('express');
const router = express.Router();
const bookmarks = new Map();


router.get("/",function(req,res, next){
    res.send(JSON.stringify(Array.from(bookmarks.values())))
});


router.post('/', (req, res) => {
    console.log(req.body)
    let videoId = req.body.id;
    if(!videoId){
        res.status(400).send("The ID of the video is required for bookmarking")
    }else{
        if(bookmarks.has(videoId)){
            bookmarks.delete(videoId)
        }else{
            bookmarks.set(videoId, req.body)
        }
        console.log("bookmarks ; " + JSON.stringify(Array.from(bookmarks.values())))

        res.status(200).send(JSON.stringify(Array.from(bookmarks.values())))
    }
    });
    
    module.exports = router;