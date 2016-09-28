'use strict'

const express = require('express')
const resolve = require('path').resolve

const app = express()

const files = () => express.static(resolve(__dirname, 'public'))

app.enable('etag')
app.use(files())

app.get(/\/|index(.html)?$/, function (req, res) {
  const indexFile = resolve(__dirname, 'public/index.html')
  res.sendFile(indexFile)
})

if (!module.parent) {
  app.listen('3000')
}

module.exports = app
