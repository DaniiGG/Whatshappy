const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000

app.get('/poke', (req, res) => {
    res.send('Los fakin pokemones')
  })
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})