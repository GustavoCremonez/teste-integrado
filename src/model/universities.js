const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	alpha_two_code: {
		type: String,
		required: true,
	},
	web_pages: [{
		type: String,
		required: true,
	}],
	name: {
		type: String,
		unique: true,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	domains: [{
		type: String,
		required: true,
	}],
	state_province: {
		type: String
	},
})

const Model = mongoose.model('universities', schema)

module.exports = Model