const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todoListDB");
// mongoose.connect("mongodb+srv://admin:admin@cluster1.nqvqztn.mongodb.net?retryWrites=true&writeConcern=majority");

const app=express();

app.listen(3000,()=>{
    console.log("Server is start at port 3000");
});

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));

module.exports=app;
