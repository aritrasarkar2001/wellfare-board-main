const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String },
    category: { type: String, required: true },
    creation: { type: Date, default: Date.now },
    
});
 
const Event =mongoose.model('event', eventSchema);
module.exports= Event;