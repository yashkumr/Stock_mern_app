import mongoose from "mongoose";
const transectionShema = new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:[true, 'amount is required']
    },
    type:{
        type:String,
        required:[true, "type is required"]
    }
    , category:{
        type:String,

    },
   
    description:{
        type:String,
        required:[true, 'description is required']
    },
    refrence:{
        type:String,
    },

    date:{
        type:Date,
        required:[true, 'date is required'],
        
    },
}
,{timestamps:true})
export default mongoose.model("transectionModel", transectionShema);