const express = require("express");
const bcrypt = require("bcrypt");
const { users } = require("../models");
const Validation = require("../helpers/Validation");
const { sign } = require("jsonwebtoken")
require('dotenv').config()

const router = express.Router();

router.get('/', async (_, res) => {
    return res.send(false);
})

router.post('/', async (request, res) => {

    const {email, password, username} = request.body;

    
    
    if(!email || !Validation.isValidEmail(email)){
        return res.json({ error: "Invalid Email"});
    };
    
    if(!password || !Validation.isValidPassword(password)) {
        return res.json({ error: "Invalid Password"});
    }
    
    if(!username || !Validation.isValidUsername(username)){
        return res.json({error: "invalid Username"});
    }
    try {
        bcrypt.hash(password, 10).then(async (hash) => {
            try {
            await users.create({
                email: email,
                password: hash,
                username: username
            });
            return res.json({message: "User has been CREATED"});
            }catch(e) {
                return res.json({ error: e})
            };
        })

    } catch(e) {
        return res.json({ error: e});
    }
})

router.post("/login", async (req, res)=> {
        const {email, username, password} = req.body;

        console.log("Email", email, username, password)

        //capire email o password
        if(!email && !username) {
            return res.json ({error: "Invalid Input"});
        }
        if (email && !Validation.isValidEmail(email)) {
            return res.json({ error: "Invalid Email"});
        }
        if (username && !Validation.isValidUsername(username)) {
            return res.json ({error: "Invalid Username"})
        }

        let user;
        if(username) {
            user = await users.findOne({where:{username:username}})
        }
        else if(email) {
            user =await users.findOne({where: {email:email}})
        }

        if(!user) {
            return res.json({error: "Account does not exist."})
        }

        // match password;

        bcrypt.compare(password, user.password).then((match) => {
            if(!match) {
                return res.json({error: "Wrong Password"})
            }
            const authToken = sign (
                {
                    email: user.email,
                    status: true,
                }
                , process.env.AUTH_SECRET)

                return res.json({
                    authToken: authToken,
                    email: user.email,
                    status:true
                });
        })
    }
)
module.exports = router;