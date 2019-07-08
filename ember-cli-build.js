'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const crawl = require('prember-crawler');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['images/*']
    },
    prember: {
      urls: crawl
    }
  });

  return app.toTree();
};
