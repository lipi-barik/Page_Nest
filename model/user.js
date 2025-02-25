const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    role: {
        type: String,
        enum: ["Admin", "User"]
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);