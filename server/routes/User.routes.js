const {Router} = require('express');
const {postFormData, getUserData} = require("../controller/user.controller")
const userRouter = Router();

// get request 
userRouter.get("/userdata", getUserData)


// post request
userRouter.post("/adduserdata", postFormData)

module.exports = userRouter
