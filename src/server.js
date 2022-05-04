const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// database connection
db.connect()

// enable CORS
app.use(cors())

// enable server to receive json
app.use(express.json())

// defining the routes
app.use('/api', routes)

// running the server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))