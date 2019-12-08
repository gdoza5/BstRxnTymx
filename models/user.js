let mongoose = require('mongoose');


let Schema = mongoose.Schema;


let athleteSchema = new Schema({
    name: String,
    height: Number,
    weight: Number,
    age: Number,
    position: String,
    avatar: String,
})

let teamSchema = new Schema({
    name: String,
    sport: String,
    athletes: [athleteSchema]
    

})

let userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    teams: [teamSchema]
})



module.exports = mongoose.model('User', userSchema);