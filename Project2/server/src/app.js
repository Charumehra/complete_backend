const express = require('express')
const authRoute = require('./routes/auth.route')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth", authRoute)


module.exports = app;