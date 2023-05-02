const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const UserRouter = require("../routers/UserRouter");
const mongoose = require("mongoose");

app.use("/users", UserRouter);
app.use(express.json());

app.listen(port,(req,res)=>{
  console.log(`Server running on port ${port}`)
})

app.get("/",(req , res)=>{
  res.send("Hello , World");
})

// mongoose.connect("mongodb+srv://AhmedSameh:AhmedSameh@cluster0.oklaqpt.mongodb.net/?retryWrites=true&w=majority")
//   .then(()=>{
//     app.listen(5000,()=>{
//       console.log("Server Started on port 5000")
//     })
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

app.listen(port,()=>{
        console.log("Server Started on port")
      })