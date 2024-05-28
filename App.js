const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"success"});
});

app.listen(port,()=>{
    console.log("server started success");
})