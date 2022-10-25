const express = require("express");
const app = express();
const route = require("./router/useroute");
const mongo = require("./connect");
const dotenv = require("dotenv")
dotenv.config();
mongo.connect();
const cors=require("cors");
app.use(cors());

app.use(express.json());
app.use("/", (req, res,next) => {
  var auth={
    authrised:true
   };
   if(auth.authrised){
    next();
   }else{
    res.send({msg:"Not Authorised"})
   }
    
});


app.use("/user", route);


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log("app is running")
})
