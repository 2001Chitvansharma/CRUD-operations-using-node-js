const mongoose = require("mongoose");
const jamesSchema = new mongoose.Schema({
    username:{

        type:String,
        default:"",
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});
module.exports=mongoose.model("james",jamesSchema);