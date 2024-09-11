const express = require('express')
const cors = require('cors');
const { db } = require('./bd/db');
const { readdirSync } = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middleswares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    app.listen(PORT, () => {
        db()
        console.log('listening to port:', PORT)
    })
}

server()