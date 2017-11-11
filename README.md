# hapi-boom-decorators

-----------------

### Notice for Hapi v17 users

This plugin will not be updated to work with Hapi v17. Please read [my comment in issues](https://github.com/brainsiq/hapi-boom-decorators/issues/51#issuecomment-343654910) and feel free to contribute to the discussion if you have other reasons for using this module.

-----------------

[![Known Vulnerabilities](https://snyk.io/test/github/brainsiq/hapi-boom-decorators/badge.svg)](https://snyk.io/test/github/brainsiq/hapi-boom-decorators) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![Circle CI](https://circleci.com/gh/brainsiq/hapi-boom-decorators/tree/master.svg?style=shield&circle-token=9fe584ee6c1099bec9ba2864d3a63428f444a098)](https://circleci.com/gh/brainsiq/hapi-boom-decorators/tree/master)

[![NPM](https://nodei.co/npm/hapi-boom-decorators.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hapi-boom-decorators/)

A plugin for [hapi.js](hapijs.com) to make responding with [boom](https://github.com/hapijs/boom) errors a little less verbose by decorating the reply interface with equivilent functions. This module is tested against the latest versions of Node.js 4, 6 and 7.


## Install

`npm install hapi-boom-decorators --save`

## Register Plugin

```
server.register({
  register: require('hapi-boom-decorators')
}, err => {
  ...
})
```

## API

Standard way of replying with boom response:

```
server.route({
  method: 'GET',
  path: '/resource/{id}',
  handler: (request, reply) => {
    reply(Boom.notFound())
  }
})
```

New way:

```
server.route({
  method: 'GET',
  path: '/resource/{id}',
  handler: (request, reply) => {
    reply.notFound()
  }
})
```

Check the [boom documentation](https://github.com/hapijs/boom#overview) for all available functions. Every 4xx and 5xx error type has been implemented, and the parameters to each function in hapi-boom-decorators are the same as the parameters to the boom function. In addition:

* [wrap](https://github.com/hapijs/boom#wraperror-statuscode-message) - `reply(Boom.wrap(err, 500, 'a message'))` can be written as `reply.boom(500, err, 'a message')`
* [create](https://github.com/hapijs/boom#createstatuscode-message-data) - `reply(Boom.create(500, 'a message', {}))` can be written as `reply.boom(500, 'a message', {})`
