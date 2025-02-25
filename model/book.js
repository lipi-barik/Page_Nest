const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        required:true
    },
    wishlist:{
        type:String,
        required:true,
        default:false
    }
},{
    timestamps:true
});
module.exports= mongoose.model('book',bookSchema);

 