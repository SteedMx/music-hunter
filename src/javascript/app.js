'use strict'

const whatLink = document.querySelector('#what')
const whatPopup = document.querySelector('#what-popup')
const whatClose = document.querySelector('#what-close')

whatLink.addEventListener('click', function (event) {
  event.preventDefault()
  whatPopup.dataset.visible = 'true'
})

whatClose.addEventListener('click', function (event) {
  event.preventDefault()
  whatPopup.dataset.visible = 'false'
})

const whyLink = document.querySelector('#why')
const whyPopup = document.querySelector('#why-popup')
const whyClose = document.querySelector('#why-close')

whyLink.addEventListener('click', function (event) {
  event.preventDefault()
  whyPopup.dataset.visible = 'true'
})

whyClose.addEventListener('click', function (event) {
  event.preventDefault()
  whyPopup.dataset.visible = 'false'
})

const howLink = document.querySelector('#how')
const howPopup = document.querySelector('#how-popup')
const howClose = document.querySelector('#how-close')

howLink.addEventListener('click', function (event) {
  event.preventDefault()
  howPopup.dataset.visible = 'true'
})

howClose.addEventListener('click', function (event) {
  event.preventDefault()
  howPopup.dataset.visible = 'false'
})
