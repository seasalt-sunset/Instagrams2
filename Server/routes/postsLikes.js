const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const {postsLikes} = require("../models");


router.post("/", validateToken, async (req, res) =>{
        const { like, postId} = req.body;
        console.log (like, postId)
    let postLiked = await postsLikes.findOne({
        where: {
            userId: req.user.id,
            postId: postId
        }
    })
    let likedPosts;
    if (postLiked){
        likedPosts = await postsLikes.update({
            like: like
        },{
            where: {
                userId: req.user.id,
                postId: postId,
                id: postLiked.id
            }
        })
    }else {
        likedPosts= await postsLikes.create({
            like: like,
            userId: req.user.id,
            postId: postId
        })
    
    }
    return res.json(likedPosts)
    })

    module.exports = router;


