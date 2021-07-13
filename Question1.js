const express= require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nosql_assignment', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});
const userSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    mobile_num:{
        type: String,
        uniqre:true
    }
})
const User= new mongoose.model("users",userSchema);

app.post("/addCustomer",async (req,res)=>{
    const data=req.body;
    //finding Duplicate Entry if EXists
    const duplicate=await User.find({"mobile_num":data.mobile_num});
    if(duplicate!=undefined){
        res.send({"status":"Duplicate entry"}) //If Duplicate exists then return Duplicate Entry status
    }
    else{
        await User.create(data); // Create a unique entry
        res.send({"status":"Database Entry made"}) // Return a success message
    }
})