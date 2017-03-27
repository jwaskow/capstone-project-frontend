'use strict'

const config = require('../config')

const store = require('../store')

const indexTeas = function () {
  return $.ajax({
    url: config.apiOrigin + '/teas',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createTea = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/teas',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateTea = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/teas/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroyTea = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/teas/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  indexTeas,
  createTea,
  updateTea,
  destroyTea
}
