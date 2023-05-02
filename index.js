const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(express.json());


app.get("/",(req , res)=>{
  res.send("Hello , World");
})

app.listen(PORT,(req,res)=>{
  console.log(`Server running on port ${PORT}`)
})
