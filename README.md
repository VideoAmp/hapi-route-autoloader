Hapi Route Autoloader
===============================
A Hapi plugin that provides an auto-loader for Hapi routes from a specified directory.

## Install
## `yarn`
```sh
yarn add @videoamp/hapi-route-autoloader
```
## `npm`
```sh
npm install --save @videoamp/hapi-route-autoloader
```

## Setup
This package provides a Hapi plugin which loads routes according from the
directory provided to the function. This allows you to customize the directory
to load from on a per-project basis.

To use the Hapi plugin, you can require the package directly in `server.register`.
An example of server setup is below:

```js
var Hapi = require('hapi');
var server = new Hapi.Server({ port: 8000 });

server.register(require("@videoamp/hapi-route-autoloader")("controllers/"))
    .then(() => server.start());
```

## Folder Structure
Files inside of the specified directory can export either an array of routes or a single
route object. See [the fixtures folder]() in `test/` for an example.
