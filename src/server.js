const express = require('express')
const cors = require('cors')
require('dotenv').config()

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

app.use(cors())

app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))