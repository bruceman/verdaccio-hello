"use strict";

/**
 * Simple health check plugin for verdaccio
 */
class VerdaccioHelloPlugin {
  constructor(config, options) {
      this.path = config.path || '/hello';
      this.text = config.text || 'ok';
  }

  register_middlewares(app, auth, storage) {
    app.get(this.path, (req, res) => {
      res.send(this.text);
    });
  }
}

module.exports = (config, options) => {
  return new VerdaccioHelloPlugin(config, options);
};