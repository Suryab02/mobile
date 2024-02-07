import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    email : {
        type : String , 
        required : [true,'please enter your email'],
        
    },
    name :{
        type : String,
     required:[true,'please enter your name']},
    
    password : {
        type : String,
        required:[true,'please enter the password']
    }

})


export default mongoose.model("User",Userschema);