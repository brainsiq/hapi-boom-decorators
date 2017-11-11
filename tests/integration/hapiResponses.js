/* global describe, it */
'use strict'

const chai = require('chai')
const Hapi = require('hapi')
const plugin = require('../../')
const expect = chai.expect

// Run a few tests to ensure that the plugin behaviour actually results in the correct Hapi responses
describe('hapi responses', () => {
  it('responds with 400 Bad Request for #badRequest', async () => {
    const message = 'a bad request message'
    const server = new Hapi.Server({})

    await server.register(plugin)

    server.route({
      method: 'GET',
      path: '/test',
      handler: (request, h) => {
        return h.badRequest(message)
      }
    })

    const res = await server.inject({ url: '/test', method: 'GET' })

    expect(res.statusCode).to.equal(400)
    expect(res.result).to.deep.equal({
      statusCode: 400,
      error: 'Bad Request',
      message
    })
  })

  it('responds with 418 I\'m a teapot for #teapot', async () => {
    const message = 'short and stout'
    const server = new Hapi.Server({})

    await server.register(plugin)

    server.route({
      method: 'GET',
      path: '/test',
      handler: (request, h) => {
        return h.teapot(message)
      }
    })

    const res = await server.inject({ url: '/test', method: 'GET' })

    expect(res.statusCode).to.equal(418)
    expect(res.result).to.deep.equal({
      statusCode: 418,
      error: 'I\'m a teapot',
      message
    })
  })

  it('responds with the correct response for #boom', async () => {
    const error = new Error('boomified!')
    const message = 'not available'
    const server = new Hapi.Server({})

    await server.register(plugin)

    server.route({
      method: 'GET',
      path: '/test',
      handler: (request, h) => {
        return h.boomify(error, {
          statusCode: 503,
          message
        })
      }
    })

    const res = await server.inject({ url: '/test', method: 'GET' })

    expect(res.statusCode).to.equal(503)
    expect(res.result).to.deep.equal({
      statusCode: 503,
      error: 'Service Unavailable',
      message: 'not available: boomified!'
    })
  })
})
