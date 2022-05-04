//require
const express = require('express')

//hosts
const app = express()
const port = 5000


app.get('/', (req, res) => res.send('Hello, I am App Dev!'))


//app.listen
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})