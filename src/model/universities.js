const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    alpha_two_code:{
        type: String,
    },
    web_pages: [{
        type: String,
    }],
    name: {
        type: String,
        unique: true
    },
    country: {
        type: String,
        unique: true
    },
    domains: [{
        type: String,
    }],
    state_province: {
        type: String
    },
})

const Model =  mongoose.model('universities', schema)

module.exports = Model