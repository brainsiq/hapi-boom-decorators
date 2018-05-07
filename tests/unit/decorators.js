/* global describe, it, beforeEach */
'use strict'

const chai = require('chai')
const Boom = require('boom')
const Hapi = require('hapi')
const plugin = require('../../')
const expect = chai.expect

const getHandleOnHapiResponseToolkit = async (doReply, onPostHandler) => {
  const server = new Hapi.Server({})

  await server.register(plugin)

  return new Promise((resolve, reject) => {
    server.route({
      method: 'GET',
      path: '/test',
      handler: (request, h) => {
        resolve(h)

        return 'ok'
      }
    })

    server.inject({ url: '/test', method: 'GET' })
  })
}

const testErrorMessage = 'test message'
const testErrorData = {test: 'data'}

const decoratedFunctions = [
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
  'failedDependency'
]

describe('decorators', () => {
  let toolkit = null

  beforeEach(async () => {
    toolkit = await getHandleOnHapiResponseToolkit()
  })

  decoratedFunctions.forEach(boomFunction => {
    it(`decorates toolkit with #${boomFunction} throwing a Boom#${boomFunction} error`, () => {
      const expectedBoomError = Boom[boomFunction](testErrorMessage, testErrorData)

      try {
        toolkit[boomFunction](testErrorMessage, testErrorData)
      } catch (err) {
        expect(err).to.deep.include(expectedBoomError)

        return
      }

      throw new Error(`Didn't throw a Boom#${boomFunction} error`)
    })
  })

  it('decorates toolkit with #boomify throwing a Boom#boomify error', () => {
    const error = new Error('test error')
    const options = {
      statusCode: 400,
      message: testErrorMessage,
      decorate: testErrorData,
      override: false
    }
    const expectedBoomError = Boom.boomify(error, options)

    try {
      toolkit.boomify(error, options)
    } catch (err) {
      expect(err).to.deep.include(expectedBoomError)

      return
    }

    throw new Error(`Didn't throw a Boom#boomify error`)
  })

  it('passes all arguments for methods with a different Boom signature', () => {
    // i.e. boomify, methodNotAllowed, unauthorized
    const message = 'not allowed'
    const data = { foo: 'bar' }
    const allow = 'allow header value'
    const expectedBoomError = Boom.methodNotAllowed(message, data, allow)

    try {
      toolkit.methodNotAllowed(message, data, allow)
    } catch (err) {
      expect(err).to.deep.include(expectedBoomError)

      return
    }

    throw new Error(`Didn't throw a Boom#methodNotAllowed error`)
  })
})
