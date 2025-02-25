const mongoose = require('mongoose');
const book = require('./book');

const orderSchema = new mongoose.Schema({
      products: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: { type: Number, required: true, default: 1 }, // Quantity for each product
            }
        ],
        totalPrice: { type: Number, required: true },
        customerName: { type: String, required: true },
        date: { type: Date, default: Date.now },
        status:{
        type:String,
        default:"Order Placed ",
        enum:["Order Placed","Out for delivery ,Delivered,Canceled"]
         },
    
},{
    timestamps:true
});
module.exports= mongoose.model('order',orderSchema);

 