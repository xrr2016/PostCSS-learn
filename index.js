const { exec } = require('child_process');
const express = require('express')

const app = express()
exec('yarn json-server')

app.use(express.static('dist'))

app.listen(9999, () => {
  console.log('Porject running on port 9999')
})