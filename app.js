'use strict'

const express = require('express')
const BodyParser = require('body-parser')

const Axios = require('axios')
const resolve = require('path').resolve

const app = express()

const mandrillApiKey = require('./.env').mandrillApiKey

const files = () => express.static(resolve(__dirname, 'public'))

app.enable('etag')
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use(files())

app.get(/\/|index(.html)?$/, function (req, res) {
  const indexFile = resolve(__dirname, 'public/index.html')
  res.sendFile(indexFile)
})

app.post(/\/contact$/, function (req, res) {
  const name = req.body.name
  const message = req.body.message
  const email = req.body.email

  Axios
    .post('https://mandrillapp.com/api/1.0/messages/send.json', {
      'key': mandrillApiKey,
      'message': {
          'html': '<h2>Hi!</h2>',
          'subject': name.toString(),
          'from_email': email.toString(),
          'from_name': name.toString(),
          'to': [
              {
                  'email': 'hola@musichunter.com',
                  'name': name.toString(),
                  'type': 'to'
              }
          ],
          'headers': {
              'Reply-To': ''
          },
          'important': false,
          'track_opens': null,
          'track_clicks': null,
          'auto_text': null,
          'auto_html': null,
          'inline_css': null,
          'url_strip_qs': null,
          'preserve_recipients': null,
          'view_content_link': null,
          'bcc_address': 'message.bcc_address@example.com',
          'tracking_domain': null,
          'signing_domain': null,
          'return_path_domain': null,
          'merge': true,
          'metadata': {
              'website': 'www.example.com'
          }
      },
      'async': false,
      'ip_pool': 'Main Pool'
    })
    .then(() => {
      res
        .status(201)
        .json({
          status: 'Ok',
          message: 'Email Sent'
        })
    })
    .catch(() => {
      res
        .status(500)
        .json([
          status: 'Error',
          message: 'Email Not Sent'
        ])
    })
})

if (!module.parent) {
  app.listen('3000')
}

module.exports = app
