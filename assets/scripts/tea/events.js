'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexTeas = function (event) {
  event.preventDefault()
  api.indexTeas()
    .then(ui.indexSuccess)
    .catch(ui.onError)
}

const onCreateTeas = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createTea(data)
  .then(ui.createSuccess)
  .then(api.indexTeas)
  .then(ui.indexSuccess)
  .catch(ui.failure)
}

const onUpdateTea = function (event) {
  event.preventDefault()
  console.log('input clicked')
  const id = event.target.getAttribute('data-id')
  console.log(id)
  const data = getFormFields(event.target)
  console.log(data)
  api.updateTea(id, data)
  .then(ui.updateSuccess)
  .then(api.indexTeas)
  .then(ui.indexSuccess)
  .catch(ui.failure)
}

const onDestroyTea = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  api.destroyTea(id)
  .then(ui.destroySuccess)
  .then(api.indexTeas)
  .then(ui.indexSuccess)
  .catch(ui.failure)
}

const teaDropdownToggle = function (event) {
  $(event.target).toggleClass('glyphicon-menu-down')
  $(event.target).toggleClass('glyphicon-menu-up')
}

const teaRowToggle = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  $('.tea-update-form' + id).toggle()
  $('.tea-display-row' + id).toggle()
  $('.update-tea-btn' + id).toggle()
}

let isRunning = false

const startTimer = function (duration, display) {
  isRunning = true
  let timer = duration
  let minutes
  let seconds

  let timerLogic = function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    seconds = seconds < 10 ? '0' + seconds : seconds

    display.text(minutes + ':' + seconds)

    if (--timer < 0) {
      display.text('')
      $('#timer-done-message').text('TEA TIME')
      $('#timer-wait-message').text('')
      endTimer(timerLogic)
      isRunning = false
      return isRunning
    }
  }
  timerLogic = setInterval(timerLogic, 1000)
}

const endTimer = function (timerLogic) {
  clearInterval(timerLogic)
}

const loadTime = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  api.showTea(id)
  .then(function (data) {
    console.log(isRunning)
    if (isRunning === false) {
      $('#timer-done-message').text('')
      startTimer(data.tea.steepTime, $('#time'))
    } else {
      $('#timer-wait-message').text('Please wait until the current timer finishes')
      return
    }
  })
}

const addTeaHandlers = function () {
  $('#index-tea').on('click', onIndexTeas)
  $('#create-tea').on('submit', onCreateTeas)
  $('#index-tea-container').on('submit', '#update-tea', onUpdateTea)
  $('#index-tea-container').on('click', '#delete-tea', onDestroyTea)
  $('#index-tea-container').on('click', '#edit-tea-row', teaRowToggle)
  $('#index-tea-container').on('click', '#options-btn', teaDropdownToggle)
  $('#index-tea-container').on('click', '#steep-btn', loadTime)
  $('#index-tea-container').on('click', '.steep-btn', endTimer)
}

module.exports = {
  onCreateTeas,
  onIndexTeas,
  onUpdateTea,
  addTeaHandlers
}
