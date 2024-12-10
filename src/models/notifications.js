import mongoose, { Schema } from "mongoose";


const notificationSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"userSchema"
    },

    message:{
        type:String
    },

    isread:{
        type:Boolean
    }
},
{timestamps:true}
)

export const notification=mongoose.model("notificatioSchema",notificationSchema)