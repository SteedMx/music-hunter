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

const env = require('../../.env')
const blogRoute = require('../../.env').blogRoute
const Axios = require('axios')

const postsContainer = document.querySelector('.BlogPosts')

Axios
  .get(blogRoute)
  .then(function (res) {
    return res.data.posts
  })
  .then(function (posts) {
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
  })
  .catch(function (err) {
    console.log(err)
  })

// Function to animate the scroll
var smoothScroll = function (anchor, duration) {

  // Calculate how far and how fast to scroll
  var startLocation = window.pageYOffset;
  var endLocation = anchor.offsetTop;
  var distance = endLocation - startLocation;
  var increments = distance/(duration/16);
  var stopAnimation;

  // Scroll the page by an increment, and check if it's time to stop
  var animateScroll = function () {
    window.scrollBy(0, increments);
    stopAnimation();
  };

  // If scrolling down
  if ( increments >= 0 ) {
    // Stop animation when you reach the anchor OR the bottom of the page
    stopAnimation = function () {
      var travelled = window.pageYOffset;
      if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
        clearInterval(runAnimation);
      }
    };
  }
  // If scrolling up
  else {
    // Stop animation when you reach the anchor OR the top of the page
    stopAnimation = function () {
        var travelled = window.pageYOffset;
        if ( travelled <= (endLocation || 0) ) {
          clearInterval(runAnimation);
        }
      };
    }

    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
  };

  // Define smooth scroll links
  var scrollToggle = document.querySelectorAll('.NavLink');

  // For each smooth scroll link
  [].forEach.call(scrollToggle, function (toggle) {
    // When the smooth scroll link is clicked
    toggle.addEventListener('click', function(e) {
    // Prevent the default link behavior
    e.preventDefault();

    // Get anchor link and calculate distance from the top
    var dataID = toggle.getAttribute('href');
    var dataTarget = document.querySelector(dataID);
    var dataSpeed = toggle.getAttribute('data-speed');

    // If the anchor exists
    if (dataTarget) {
      // Scroll to the anchor
      smoothScroll(dataTarget, dataSpeed || 500);
    }
  }, false);
});

smoothScroll('hero', 5000)
smoothScroll('contact', 5000)
smoothScroll('us', 5000)
smoothScroll('blog', 5000)
smoothScroll('gallery', 5000)
