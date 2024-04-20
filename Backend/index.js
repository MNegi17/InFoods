const express = require("express");
const app = express();
const port = 5000
const mongoDB = require("./datab");
const createUser = require('./Routes/createUser')
const cors =require("cors")


mongoDB();

app.use(cors());
app.use(express.json());
app.use('/api/',createUser)

app.get('/',(req,res)=>{
    res.send("Hello World");
   
})

app.listen(port);