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

// const onUpdateTea = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const id = event.target.getAttribute('data-id')
//   api.updateTea(id, data)
//   .then(ui.updateSuccess)
//   .then(api.indexTeas)
//   .then(ui.indexSuccess)
//   .catch(ui.failure)
// }
//
// const onDestroyTea = function (event) {
//   event.preventDefault()
//   const id = event.target.getAttribute('data-id')
//   api.destroyTea(id)
//   .then(ui.destroySuccess)
//   .then(api.indexTeas)
//   .then(ui.indexSuccess)
//   .catch(ui.failure)
// }

// const teaDropdownToggle = function (event) {
//   $(event.target).toggleClass('glyphicon-menu-down');
//   $(event.target).toggleClass('glyphicon-menu-up');
// };

const addTeaHandlers = function () {
  $('#index-tea').on('click', onIndexTeas)
  $('#create-tea').on('submit', onCreateTeas)
  // $('#content').on('submit', '#update-tea', onUpdateTea);
  // $('#content').on('click', '#delete-tea', onDestroyTea);
  // $('#content').on('click', '#dropdown-tea', teaDropdownToggle);
}

module.exports = {
  onCreateTeas,
  onIndexTeas,
  // onUpdateTea,
  addTeaHandlers,
};
