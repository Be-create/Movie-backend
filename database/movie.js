import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    
    
        
        
        adult: {type:Boolean,
        required:false,
        default:false
        },
        backdrop_path: {type:String,
            required:true
            },
        genre:{type:String,
            required:true,
            default:"action"
            },
        id: {type:Number,
            required:true
            },
        original_language: {type:String,
            required:false,
            default:"en"
            },
        original_title: {type:String,
            required:false
            },
        overview: {type:String,
            required:true
            },
        popularity: {type:Number,
            required:true
            },
        poster_path: {type:String,
            required:false
            },
        release_date:{type:String,
            required:true
            },
        title:{type:String,
            required:true
            },
        video: {type:Boolean,
            required:false
            },
        vote_average:{type:Number,
            required:true,
            default:0
            },
        vote_count: {type:Number,
            required:true,default:0
            }
    
}


)

export const movieModel = mongoose.model("users", movieSchema, 'movies')