'use strict'

const success = () => {
  $('#status-box').text('Action Successful')
}

const failure = () => {
  $('#status-box').text('Theres seems to have been an error')
}

const signUpSuccess = () => {
  const account = $('#account-name').val()
  $('#status-box').text('Account Created: ' + account)
  $('.signup-field').val('')
  $('#collapseSignUp').collapse('hide')
}

const signUpFail = () => {
  $('#status-box').text('Either the email is not valid or the passwords do not match.')
}

const signInSuccess = () => {
  const account = $('#account-name-signin').val()
  $('#status-box').text('Welcome, ' + account + ' !')
  $('#signUpButton').addClass('hidden')
  $('#signInButton').addClass('hidden')
  $('#changePassButton').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#collapseSignUp').collapse('hide')
  $('#collapseSignIn').collapse('hide')
  $('.signin-field').val('')
  $('.signup-field').val('')
}

const signInFail = () => {
  $('#status-box').text('The information is incorrect.')
}

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully')
  $('.change-pass-field').val('')
  $('#collapseChangePass').collapse('hide')
}

const changePassFail = () => {
  $('#status-box').text('Please make sure you entered your current password correctly, and filled out all the fields.')
}

const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.')
  $('.change-pass-field').val('')
  $('#signUpButton').removeClass('hidden')
  $('#signInButton').removeClass('hidden')
  $('#changePassButton').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#collapseChangePass').collapse('hide')
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePassSuccess,
  changePassFail,
  signOutSuccess
}
