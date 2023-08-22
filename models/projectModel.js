const mongoose = require('mongoose')

const Schema = mongoose.Schema
//first argument on how it looks and second argument is the time stamp
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    year: {
        type: Number,
        required: true
    } 
},{ timestamps: true })

module.exports = mongoose.model('Project', projectSchema)
