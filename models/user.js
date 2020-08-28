const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    name: {
        type: "String",
        required: true,
        unique: true,
    },
    highScore20: {
        type: Number
    },
    highScore50: {
        type: Number
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;