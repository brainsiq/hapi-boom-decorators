# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2018-12-04
### Added
- Support for hapi.js version 17 and Boom version 7
- Decorator function for `Boom.boomify`

### Removed
- Support for hapi.js versions older than 17 and Node.js versions 4, 6 and 7
- `wrap` and `create` decorator functions (use `boomify` instead)

## [3.0.1] - 2017-11-11
- Updated docs with Hapi v17 information

## [3.0.0] - 2017-05-29
### Changed
- Updated boom dependency to version 5.1.0

## [2.3.0] - 2017-04-19
### Added
- Support for Boom.teapot()

## [2.2.2] - 2016-12-04
### Changed
- Regenerated npm-shrinkwrap.json to remove development dependencies

## [2.2.1] - 2016-12-04
### Fixed
- Remove spread operator usage to fix Node 4 support [#39](https://github.com/brainsiq/hapi-boom-decorators/issues/39)
- Add node 4 back to CI configuration

## [2.2.0] - 2016-12-03
### Fixed
- Support creating boom errors with a function signature that is not `Boom.[errorType]([message], [data])`

e.g. `Boom.methodNotAllowed([message], [data], [allow])`

## [2.1.1] - 2016-12-03
### Changed
- Test against latest versions of node 6 and 7
- Update dependencies
- Remove retire.js and test with Snyk

## [2.1.0] - 2016-10-07
### Changed
- Test against latest versions of node 4, 5 and 6
- Update boom dependency

### Added
- Decorate hapi.js reply interface with new boom functions: internal, paymentRequired

## [2.0.2] - 2016-09-01
### Changed
- Test against latest hapi version 15
- Update dependencies
- Test against latest versions of node 5 and 6

## [2.0.1] - 2016-08-14
### Changed
- Test against latest hapi version 14
- Update dev dependencies (inc changing XO -> JS Standard)

## [2.0.0] - 2016-07-14
### Changed
- Update Boom dependency
- Replace serverTimeout function with serverUnavailable

## [1.1.4] - 2016-07-14
### Changed
- Update out of date dependencies (exc. Boom)
- Test only in latest few versions of node 4.x, 5.x and 6.x

## [1.1.3] - 2016-03-19
### Changed
- Test against hapi version 13
- Update out of date dependencies
- Test against additional node 4.x and 5.x versions

## [1.1.2] - 2016-01-10
### Changed
- Test against hapi version 12
- Test against additional node version 5.4

## [1.1.1] - 2016-01-03
### Changed
- Fix peer dependency conflicts with dev dependencies and build issues
- Specify minimum node version in package.json

## [1.1.0] - 2015-12-27
### Added
- `reply.illegal()` decorated function for new 451 HTTP response code

### Changed
- Test against additional node versions (5.2 and 5.3)
