const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
  var a = 1;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})