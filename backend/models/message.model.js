import mongoose from "mongoose"
const messageSchema=({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        typr:String,
        required:"true"
    }
},{timestamps:true});
const Message =mongoose.model("Message",messageSchema)
export default Message;