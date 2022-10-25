const { Router } = require("express");
const express = require("express");
const router = express(Router);
const userData=require("../modules/user")

router.post("/signup",userData.usersingnup);
router.post("/signin",userData.signin);


module.exports=router;