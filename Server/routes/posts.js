const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { posts, users } = require("../models")

router.post("/", validateToken, async (req, res) =>{
    const {title, description} = req.body;

    await posts.create({
        title: title,
        description: description,
        userId: req.user.id
    })

    return res.json({message: "Post has been CREATED"})

})

router.get ("/", validateToken, async (req, res) =>{
    let allPosts = await posts.findAll({include: [{
        model: users,
        attributes:["username"]
        }]})
    return res.json(allPosts)
})


module.exports = router