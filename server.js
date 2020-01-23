const express=require('express');


const app=express();



const port=process.env.PORT || 5000;


// Routes
app.get("/",(req,res)=>{
    res.send("Hello");
})

// Server Status
app.listen(port,(err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Server Started");
        
    }
})