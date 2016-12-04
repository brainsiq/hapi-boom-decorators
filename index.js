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
  'illegal'
]

module.exports.register = (server, options, next) => {
  boomFunctions.forEach(boomFunction => {
    server.decorate('reply', boomFunction, function () {
      this.response(Boom[boomFunction].apply(Boom, arguments))
    })
  })

  server.decorate('reply', 'boom', function () {
    var args = Array.prototype.slice.call(arguments)
    let boom

    if (args.length > 1 && args[1] instanceof Error) {
      boom = Boom.wrap(args[1], args[0], args.slice(2, args.length - 2))
    } else {
      boom = Boom.create.apply(null, args)
    }

    this.response(boom)
  })

  next()
}

module.exports.register.attributes = {
  pkg: require('./package.json')
}
