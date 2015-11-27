'use strict';

const expect = require('chai').expect;
const Boom = require('boom');
const Hapi = require('hapi');
const plugin = require('../');

const runInHapiServer = (doReply, onPostHandler) => {
  const server = new Hapi.Server();
  server.connection({});

  server.route({
    method: 'GET',
    path: '/test',
    handler: (request, reply) => {
      doReply(reply);
    }
  });

  server.ext('onPostHandler', onPostHandler);

  server.register({register: plugin}, err => {
    if (err) {
      return console.error('Failed to register plugin.', err);
    }

    server.inject({url: '/test', method: 'GET'});
  });
};

const testErrorMessage = 'test message';
const testErrorData = {test: 'data'};

const decoratedFunctions = [
  'badRequest',
  'unauthorized',
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
  'notImplemented',
  'badGateway',
  'serverTimeout',
  'gatewayTimeout'
];

describe('hapi-boom-decorators', () => {
  const assert = (request, boomFunction, done) => {
    expect(request.response).to.be.deep.equal(Boom[boomFunction](testErrorMessage, testErrorData));
    done();
  };

  decoratedFunctions.forEach(boomFunction => {
    it(`decorates reply with ${boomFunction}`, done => {
      runInHapiServer(reply => reply[boomFunction](testErrorMessage, testErrorData), request => assert(request, boomFunction, done));
    });
  });

  it('decorates reply with new boom error', done => {
    runInHapiServer(reply => reply.boom(400, 'Bad request', {data: 'my data'}), request => {
      expect(request.response).to.be.deep.equal(Boom.create(400, 'Bad request', {data: 'my data'}));
      done();
    });
  });

  it('decorates reply with wrapped boom error', done => {
    const error = new Error('test error');

    runInHapiServer(reply => reply.boom(500, error, 'an error'), request => {
      expect(request.response).to.be.deep.equal(Boom.wrap(error, 500, 'an error'));
      done();
    });
  });
});
