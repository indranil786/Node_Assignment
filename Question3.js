
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nosql_assignment3', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)});
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        unique: true
    },
    name:{
        type: String,
    }
})
const User= new mongoose.model("users",userSchema);

const customers = [{
    email : "anurag11@yopmail.com" ,
    name : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    },
    ]

const customerEntry=(customers)=>{
customers.forEach(async (customer)=>{
    const duplicate=await User.find({"email":customer.email});
    if(duplicate!=undefined){
        duplicate.name=customer.name;
        await duplicate.save();
        console.log("User Updated")
    }
    else{
        await User.create(customer)
        console.log("User Created");
    }
})
}
