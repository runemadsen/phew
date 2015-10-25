var _ = require('lodash');
var glob = require("glob");
var express = require('express');
var serveStatic = require('serve-static');
var build = require('./build');
var gaze = require('gaze');

// Server
// -------------------------------------------------------------

module.exports = function(argv, config) {

  // build assets
  build(argv, config);

  // run server
  var port = argv.port || config.port || 3450;
  var app = express();
  app.use(serveStatic('./build', { 'index': false }));
  app.listen(port);
  console.log("Started server on localhost:" + port);

  // watch for file changes
  gaze(['javascripts/**/*.js', 'stylesheets/**/*.scss'], function(err, watcher) {
    this.on('all', function(event, filepath) {
      console.log('Rebuilding ' + filepath);
      build(argv, config);
    });
  });

}