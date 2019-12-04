let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    stravaName: String,
    resourceState: Number,
    stravaId: Number,
    sAvatar: String,
    units: String
})

module.exports = mongoose.model('User', userSchema);