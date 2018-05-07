'use strict'

const Boom = require('boom')

const boomFunctions = [
  'badRequest',
  'unauthorized',
  'paymentRequired',
  'forbidden',
  'notFound',
  'methodNotAllowed',
  'notAcceptable',
  'proxyAuthRequired',
  'clientTimeout',
  'conflict',
  'resourceGone',
  'lengthRequired',
  'preconditionFailed',
  'entityTooLarge',
  'uriTooLong',
  'unsupportedMediaType',
  'rangeNotSatisfiable',
  'expectationFailed',
  'badData',
  'preconditionRequired',
  'tooManyRequests',
  'badImplementation',
  'internal',
  'notImplemented',
  'badGateway',
  'serverUnavailable',
  'gatewayTimeout',
  'illegal',
  'teapot',
  'boomify',
  'failedDependency'
]

const register = async (server, options) => {
  boomFunctions.forEach(boomFunction => {
    server.decorate('toolkit', boomFunction, function () {
      throw Boom[boomFunction].apply(Boom, arguments)
    })
  })
}

module.exports.plugin = {
  register,
  pkg: require('./package.json')
}
