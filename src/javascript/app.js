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
const galleryViewerClose = document.querySelector('#view-close')
const galleryNext = document.querySelector('.GalleryViewerNext')
const galleryPrev = document.querySelector('.GalleryViewerPrev')

const imageNumber = galleryImages.length
let imageIndex = 0

galleryImages.forEach(function (image, index) {
  image.addEventListener('click', function () {
    galleryViewer.dataset.visible = 'true'
    galleryViewerImage.src = image.src
    imageIndex = index
  })
})

galleryViewerClose.addEventListener('click', function (event) {
  event.preventDefault()
  galleryViewer.dataset.visible = 'false'
})

galleryNext.addEventListener('click', function () {
  let nextIndex = imageIndex + 1

  if (nextIndex >= imageNumber) {
    nextIndex = 0
  }

  imageIndex = nextIndex
  galleryViewerImage.src = galleryImages[imageIndex].src
})

galleryPrev.addEventListener('click', function () {
  let prevIndex = imageIndex - 1

  if (prevIndex <= 0) {
    prevIndex = imageNumber - 1
  }

  imageIndex = prevIndex
  galleryViewerImage.src = galleryImages[imageIndex].src
})

/*!
 * Blogs
 */

const Axios = require('axios')

const posts = [{
  'url': 'es-negro',
  'title': 'michel',
  'tags': ['negro','nasty','grosero'],
  'previewText': 'alsfugasfouasfa',
  'previewImage': 'http://zura.space',
  'insertedAt': '2016-09-28T00:50:21Z',
  'html': '<p>kasuhfgasofugsaouf<em>gyaufgsai</em></p>'
}]

const postsContainer = document.querySelector('.BlogPosts')

posts.forEach(function (post) {
  const item = document.createElement('li')
  item.className = 'BlogPost'

  const header = document.createElement('header')
  header.className = 'BlogPostHeader'

  const title = document.createElement('a')
  title.textContent = post.title
  title.className = 'BlogPostTitle'

  const body = document.createElement('div')
  body.className = 'BlogPostBody'

  header.appendChild(title)
  body.innerHTML  = post.previewText

  item.appendChild(header)
  item.appendChild(body)

  postsContainer.appendChild(item)
})

/*!
 * Contact Email Send
 */

const contactForm = document.querySelector('.ContactForm')

const successClose = document.querySelector('#success-close')
const failureClose = document.querySelector('#failure-close')

const successModal = document.querySelector('#success-popup')
const failureModal = document.querySelector('#failure-popup')

const mandrillApiKey = require('../../.env').mandrillApiKey

successClose.addEventListener('click', function () {
  successModal.dataset.active = 'false'
})

failureClose.addEventListener('click', function () {
  failureModal.dataset.active = 'false'
})

contactForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const name = event.target.name
  const message = event.target.message
  const email = event.target.email

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
    .then(function (res) {
      successModal.dataset.active = 'true'
    })
    .catch(function () {
      successModal.dataset.active = 'true'
    })
})
