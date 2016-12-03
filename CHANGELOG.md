# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.2.0] - 2016-12-03
- Support creating boom errors with a function signature that is not `Boom.[errorType]([message], [data])`

e.g. `Boom.methodNotAllowed([message], [data], [allow])`

## [2.1.1] - 2016-12-03
- Test against latest versions of node 6 and 7
- Update dependencies
- Remove retire.js and test with Snyk

## [2.1.0] - 2016-10-07
- Test against latest versions of node 4, 5 and 6
- Update boom dependency
- Decorate hapi.js reply interface with new boom functions: internal, paymentRequired

## [2.0.2] - 2016-09-01
- Test against latest hapi version 15
- Update dependencies
- Test against latest versions of node 5 and 6

## [2.0.1] - 2016-08-14
- Test against latest hapi version 14
- Update dev dependencies (inc changing XO -> JS Standard)

## [2.0.0] - 2016-07-14
- Update Boom dependency
- Replace severTimeout function with severUnavailable

## [1.1.4] - 2016-07-14
- Update out of date dependencies (exc. Boom)
- Test only in latest few versions of node 4.x, 5.x and 6.x

## [1.1.3] - 2016-03-19
- Test against hapi version 13
- Update out of date dependencies
- Test against additional node 4.x and 5.x versions

## [1.1.2] - 2016-01-10
- Test against hapi version 12
- Test against additional node version 5.4

## [1.1.1] - 2016-01-03
- Fix peer dependency conflicts with dev dependencies and build issues
- Specify minimum node version in package.json

## [1.1.0] - 2015-12-27
- Add `reply.illegal()` decorated function for new 451 HTTP response code
- Test against additional node versions (5.2 and 5.3)

<sub>http://keepachangelog.com</sub>
