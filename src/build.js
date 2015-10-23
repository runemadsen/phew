var _ = require('lodash');
var glob = require("glob");
var sass = require('node-sass');

module.exports = function(argv) {

  // Build JS files

  // Build CSS files
  glob('./stylesheets/*.scss', function(err, files) {

    _.each(files, function(file) {
      sass.render({ file: file }, function(err, result) {
        console.log(result)
      });
    })
  });
}