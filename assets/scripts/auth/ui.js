'use strict'

const teaApi = require('../tea/api')
const teaUi = require('../tea/ui')
const teaEvents = require('../tea/events')

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
  $('#create-tea').show()
  $('#countdown-timer').show()
  $('#timer-done-message').show()
  $('#timer-wait-message').show()
  $('#timer-main-text').text('')
  $('#time').text('')
  $('#timer-done-message').text('')
  $('#timer-wait-message').text('')
  $('#instructions').text("Use the form to the left to add teas to your collection.  When you're ready to make some tea, simply click 'steep' next to the desired tea.  The timer will let you know when it's Tea Time!")
  teaApi.indexTeas()
    .then(teaUi.indexSuccess)
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
  $('#create-tea').hide()
  $('#index-tea-container').html('')
  $('#countdown-timer').hide()
  $('#timer-done-message').hide()
  $('#timer-wait-message').hide()
  $('#timer-main-text').text('')
  $('#time').text('')
  $('#timer-done-message').text('')
  $('#timer-wait-message').text('')
  $('#cancel-timer-btn').hide()
  $('.add-tea-select').prop('selectedIndex', 0)
  $('.add-tea-field').val('')
  $('#instructions').text('Welcome to Tea Time!  This app keeps track of your favorite teas and has a built in steep timer.  Sign up or sign in to get started!')
  $('#tea-message').text('')
  teaEvents.clearIntSignOut()
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
