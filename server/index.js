require('dotenv').config()
const express = require('express')
const massive = require('massive')

const Ctrl = require ('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    console.log(db.listTables())
})


app.use(express.json())

app.get('/api/houses', Ctrl.getAllHouses)

app.post('/api/house', Ctrl.create)

app.delete('/api/house/:id', Ctrl.delete)











app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))

