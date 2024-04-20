const express = require("express");
const router = express.Router();
const user = require('../models/User');
const {createuser,loginuser} = require("../validator");
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken");
const { body } = require("express-validator");
const jwtSecret = "authPassisthejwtSecret";

router.post('/createUser', async (req,res)=>{
   const input = req.body;
   const parsedinput = createuser.safeParse(input);
   if(!parsedinput.success){
    res.status(411).json({
        msg:"wrong inputs"
    })
    return;
   }
   const salt = await bcrypt.genSalt(5);
   const secPassword = await bcrypt.hash(req.body.password,salt);
   await user.create({
    name: input.name,
    email:input.email,
    password:secPassword,
    location:input.location
   })
   res.json({
    msg : "New user has created"
})
})



router.post('/loginUser', async (req,res)=>{
    try {
        const validatedData = loginuser.parse(req.body);
    
        let email = validatedData.email;
        let userData = await user.findOne({ email });
    
        if (!userData) {
          return res.status(400).json({ errors: "Try different email" });
        }
        const passcompare = await bcrypt.compare(validatedData.password,userData.password);
    
        if (!passcompare) {
          return res.status(400).json({ errors: "Try different password" });
        }
        
        const data={
          user:{
            id:userData.id,
          }
        }
        const authToken = jwt.sign(data,jwtSecret);
        return res.json({ Success: true , authToken:authToken });
      } catch (error) {
        return res.status(400).json({ errors: error.errors });
      }
 }
 )
 

module.exports = router; 