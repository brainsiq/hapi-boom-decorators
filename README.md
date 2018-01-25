# hapi-boom-decorators

[![Greenkeeper badge](https://badges.greenkeeper.io/brainsiq/hapi-boom-decorators.svg)](https://greenkeeper.io/)

[![Known Vulnerabilities](https://snyk.io/test/github/brainsiq/hapi-boom-decorators/badge.svg)](https://snyk.io/test/github/brainsiq/hapi-boom-decorators) [![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
 [![Circle CI](https://circleci.com/gh/brainsiq/hapi-boom-decorators/tree/master.svg?style=shield&circle-token=9fe584ee6c1099bec9ba2864d3a63428f444a098)](https://circleci.com/gh/brainsiq/hapi-boom-decorators/tree/master)

[![NPM](https://nodei.co/npm/hapi-boom-decorators.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hapi-boom-decorators/)

A plugin for [hapi.js](hapijs.com) to make responding with [Boom](https://github.com/hapijs/boom) errors a little less verbose by decorating the response toolkit with equivilent functions.

This module is tested against Node.js versions 8 and 9. The minimum required version of hapi.js is 17. If you require compatibility with an older version use version 3.0.1 or older.

## Install

`npm install hapi-boom-decorators --save`

## Add plugin to hapi server

```
const hapiBoomDecorators = require('hapi-boom-decorators');

const server = new Hapi.Server();

await server.register(hapiBoomDecorators);
```

## API

The normal way of replying with a Boom error response:

```
const Boom = require('boom');

server.route({
  method: 'GET',
  path: '/resource/{id}',
  handler: (request, h) => {
    throw Boom.notFound();
  }
});
```

With hapi-boom-decorators:

```
server.route({
  method: 'GET',
  path: '/resource/{id}',
  handler: (request, h) => {
    return h.notFound();
  }
})
```

Check the [Boom API documentation](https://github.com/hapijs/boom#overview) for all Boom error types. Every 4xx and 5xxx error, as well as `boomify` can be called on the [response toolkit](https://hapijs.com/api#response-toolkit).
