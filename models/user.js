let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    avatar: String,
    googleId: String
})