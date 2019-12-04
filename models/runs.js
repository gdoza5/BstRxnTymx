let mongoose = require('mongoose')
let Schema = mongoose.Schema

let runSchema = new Schema({
    name: String,
    distance: Number,
    average_speed: Number,
    avarage_heartrate: Number,
    start_date: String

})