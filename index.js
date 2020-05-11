"use strict";

/**
 * Simple health check plugin for verdaccio
 */
class VerdaccioMiddlewarePlugin {
  constructor(config, options) {}

  register_middlewares(app, auth, storage) {
    app.get('/hello', function (req, res) {
      res.send('ok');
    });

    app.get('/-/hello', function (req, res) {
        res.send('ok');
    });
  }
}

module.exports = (config, options) => {
  return new VerdaccioMiddlewarePlugin(config, options);
};