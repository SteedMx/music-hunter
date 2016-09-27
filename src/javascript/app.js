'use strict'

/*!
 * Popup
 */

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

/*!
 * Mobile Menu
 */

const navMobileMenu = document.querySelector('#nav-mobile-menu')
const navMobileTabs = document.querySelector('#nav-mobile-tabs')
const navMobileLinks = document.querySelectorAll('.NavMobileTabsLink')

navMobileMenu.addEventListener('click', function (event) {
  event.preventDefault()

  if (navMobileTabs.dataset.visible === 'true') {
    navMobileTabs.dataset.visible = 'false'
  } else {
    navMobileTabs.dataset.visible = 'true'
  }
})

navMobileLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    navMobileTabs.dataset.visible = 'false'
  })
})

/*!
 * Gallery
 */

const galleryImages = document.querySelectorAll('.GalleryPicture')
const galleryViewer = document.querySelector('.GalleryViewer')
const galleryViewerImage = document.querySelector('.GalleryViewerImage')
const galleryViewerClose = document.querySelector('.GalleryViewerClose')

galleryImages.forEach(function (image) {
  image.addEventListener('click', function () {
    galleryViewer.dataset.visible = 'true'
    galleryViewerImage.src = image.src
  })
})

galleryViewerClose.addEventListener('click', function (event) {
  event.preventDefault()
  galleryViewer.dataset.visible = 'false'
})
