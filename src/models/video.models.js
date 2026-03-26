import mongoose , {Schema} from "mongoose";

const videoSchema = new Schema({
    thumbnail:{
        type:String,//cloudinary
        required:true,

    },
    owener:{
        type:mongoose.Schema.Types.ObjectId,
        reference:User
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0,
        
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    
},{timestamps:true})
videoSchema.plugin()




export const Video =mongoose.model("Video", userSchema)
