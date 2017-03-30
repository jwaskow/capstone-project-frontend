'use strict'

const teaHandlebars = require('../templates/tea-index.handlebars')

const indexSuccess = function (data) {
  for (let i = 0; i < data.teas.length; i++) {
    if (data.teas[i].steepTime === 30) {
      data.teas[i].steepTime = '30 seconds'
    } else if (data.teas[i].steepTime === 60) {
      data.teas[i].steepTime = '1 minute'
    } else if (data.teas[i].steepTime === 90) {
      data.teas[i].steepTime = '1 minute 30 seconds'
    } else if (data.teas[i].steepTime === 120) {
      data.teas[i].steepTime = '2 minutes'
    } else if (data.teas[i].steepTime === 150) {
      data.teas[i].steepTime = '2 minutes 30 seconds'
    } else if (data.teas[i].steepTime === 180) {
      data.teas[i].steepTime = '3 minutes'
    } else if (data.teas[i].steepTime === 210) {
      data.teas[i].steepTime = '3 minutes 30 seconds'
    } else if (data.teas[i].steepTime === 240) {
      data.teas[i].steepTime = '4 minutes'
    } else if (data.teas[i].steepTime === 270) {
      data.teas[i].steepTime = '4 minutes 30 seconds'
    } else if (data.teas[i].steepTime === 300) {
      data.teas[i].steepTime = '5 minutes'
    }
  }
  const teasIndexHtml = teaHandlebars({
    teas: data.teas
  })
  $('#index-tea-container').html(teasIndexHtml)
  $('.tea-update-form').hide()
  $('.update-tea-btn').hide()
}

const createSuccess = () => {
  $('#tea-message').text('Tea Created.')
  $('#tea-name').val('')
  $('#tea-description').val('')
  $('#tea-type-select option:eq(0)').prop('selected', true)
  $('#tea-steeptime-select option:eq(0)').prop('selected', true)
}

const updateSuccess = () => {
  $('#tea-message').text('Tea Updated.')
}

const destroySuccess = () => {
  $('#tea-message').text('Tea Deleted.')
}

module.exports = {
  createSuccess,
  indexSuccess,
  updateSuccess,
  destroySuccess
}
