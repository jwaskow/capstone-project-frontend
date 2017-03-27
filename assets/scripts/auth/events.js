'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const store = require('../store')

// These 4 functions run the auth web requests in api.js
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFail)
  } else {
    ui.signUpFail()
    // do we still need an else fail with a catch?
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then((response) => {
      store.user = response.user
      return store.user
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFail)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(() => {
      delete store.user
      return store
    })
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
