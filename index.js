"use strict";

/**
 * Simple health check plugin for verdaccio
 */
class VerdaccioMiddlewarePlugin {
  constructor(config, options) {
      this.path = config.path || '/hello';
      this.text = config.text || 'ok';
  }

  register_middlewares(app, auth, storage) {
    app.get(this.path, function (req, res) {
      res.send(this.text);
    });
  }
}

module.exports = (config, options) => {
  return new VerdaccioMiddlewarePlugin(config, options);
};