const express = require("express");
const { validateToken } = require("../middlewares/Authentication");
const {postsComments} = require("../models");
const router = express.Router();

router.get("/:postId", validateToken, async(req,res) => {
    const {postId}= req.params
    let allComments = await postsComments.findAll({
        where:{
            postId: postId
        }
    });
    return res.json(allComments)
})
router.post("/", validateToken, async(req, res) => {

    const {comment, postId} = req.body;
    
    let newComment = await postsComments.create({
        commenti: comment,
        userId: req.user.id,
        postId: postId
    })

    return res.json(newComment)
});

module.exports = router;