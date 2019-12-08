let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let athleteSchema = new Schema({
    name: String,
    height: Number,
    weight: Number,
    age: Number,
    position: String,
    avatar: String,
    team: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
})


module.exports = mongoose.model('Athlete', athleteSchema)