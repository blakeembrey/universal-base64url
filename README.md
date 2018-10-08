# Universal Base64 URL

[![NPM version](https://img.shields.io/npm/v/universal-base64url.svg?style=flat)](https://npmjs.org/package/universal-base64url)
[![NPM downloads](https://img.shields.io/npm/dm/universal-base64url.svg?style=flat)](https://npmjs.org/package/universal-base64url)
[![Build status](https://img.shields.io/travis/blakeembrey/universal-base64url.svg?style=flat)](https://travis-ci.org/blakeembrey/universal-base64url)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/universal-base64url.svg?style=flat)](https://coveralls.io/r/blakeembrey/universal-base64url?branch=master)

> Small universal [`base64url`](http://en.wikipedia.org/wiki/Base64#RFC_4648) functions for node.js and browsers.

This is a small wrapper around [`universal-base64`](https://github.com/blakeembrey/universal-base64) to support URL-safe base64 in node.js and browsers.

## Installation

```
npm install universal-base64url --save
```

## Usage

```js
import { decode, encode } from 'universal-base64url'

encode('test') //=> "dGVzdA"
decode('dGVzdA') //=> "test"
```

## TypeScript

This module uses [TypeScript](https://github.com/Microsoft/TypeScript) and contains type definitions on NPM.

## License

Apache 2.0
