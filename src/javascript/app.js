'use strict'

const itemBodies = document.querySelectorAll('.UsItemBody')
let maxHeight = 0

itemBodies.forEach(function (item) {
  if (item.offsetHeight >= maxHeight) {
    maxHeight = item.offsetHeight
  }
})

itemBodies.forEach(function (item) {
  item.style.height = `${maxHeight}px`
})
