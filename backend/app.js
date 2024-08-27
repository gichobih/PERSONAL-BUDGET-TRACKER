const express = require('express')
const cors = require('cors');
const { db } = require('./bd/db');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middleswares
app.use(express.json())
app.use(cors())


const server = () => {
    app.listen(PORT, () => {
        db()
        console.log('listening to port:', PORT)
    })
}

server()