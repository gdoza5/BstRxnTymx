let mongoose = require('mongoose')


let Schema = mongoose.Schema;



let teamSchema = new Schema({
    name: String,
    sport: String,
    athletes: [{ type: Schema.Types.ObjectId, ref: 'Athlete'}]
    

})

module.exports = mongoose.model('Team', teamSchema)