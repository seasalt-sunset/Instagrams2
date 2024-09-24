const express = require("express");
const bcrypt = require("bcrypt");
const { users } = require("../models");
const Validation = require("../helpers/Validation");

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

        //capire email o password
        if(!email && !username) {
            return res.json ({error: "Invalid Input"});
        }
        if (email && !email.isValid()) {
            return res.json({ error: "Invalid Email"});
        }
        if (username && !username.isValid) {
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
            return res.json({login:true});
        })
    }
)
module.exports = router;