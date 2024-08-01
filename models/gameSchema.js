const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({ 
    name:String,
    code:String,
    resultTime:String,
    showNumber:Number
}) 
 
module.exports = mongoose.model('games', gameSchema)