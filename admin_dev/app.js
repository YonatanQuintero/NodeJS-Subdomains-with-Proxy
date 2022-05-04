//require
const express = require('express')

//hosts
const app = express()
const port = 5001


app.get('/', (req, res) => res.send('Hello, I am Admin Dev!'))
app.get('/user', (req, res) => res.send({username:'Yonax'}))


//app.listen
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})