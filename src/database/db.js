const mongoose = require('mongoose')

function connect() {
	mongoose.connect('mongodb://localhost:27017/testIntegrado')

	const db = mongoose.connection

	db.once('open', () => {
		console.log('Connect to database!')
	})

	db.on('error', console.error.bind(console, 'Connection error:'))
}

module.exports = {
	connect
}