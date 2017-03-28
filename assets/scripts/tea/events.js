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
  $(event.target).toggleClass('gly-flip-vertical')
}

const teaRowToggle = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  $('.tea-update-form' + id).toggle()
  $('.tea-display-row' + id).toggle()
  $('.update-tea-btn' + id).toggle()
}

const addTeaHandlers = function () {
  $('#index-tea').on('click', onIndexTeas)
  $('#create-tea').on('submit', onCreateTeas)
  $('#index-tea-container').on('submit', '#update-tea', onUpdateTea)
  $('#index-tea-container').on('click', '#delete-tea', onDestroyTea)
  $('#index-tea-container').on('click', '#edit-tea-row', teaRowToggle)
  $('#index-tea-container').on('click', '#dropdown-tea', teaDropdownToggle)
}

module.exports = {
  onCreateTeas,
  onIndexTeas,
  onUpdateTea,
  addTeaHandlers
}
