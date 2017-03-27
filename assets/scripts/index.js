'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const teaEvents = require('./tea/events.js')

$(() => {
  authEvents.addHandlers()
  teaEvents.addTeaHandlers()
  $('#authButtonGroup').on('show.bs.collapse', '.collapse', function () {
    $('#authButtonGroup').find('.collapse.in').collapse('hide')
  })
  $('#create-tea').hide()
})

// use require without a reference to ensure a file is bundled
require('./example')
