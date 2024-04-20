const z = require("zod");

const createuser = z.object({
    name:z.string().min(2),
    location:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})

const loginuser = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

module.exports = {createuser,loginuser}