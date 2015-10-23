var _ = require('lodash');
var glob = require("glob");
var sass = require('node-sass');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

// Helpers
// -------------------------------------------------------------

function saveFile(filename, content) {
  fs.writeFile("./build/" + filename, content, function(err) {
    if(err) return console.log(err);
    console.log("The file was saved!");
  });
}

// Javascripts
// -------------------------------------------------------------

function buildJS(argv, config) {

}

// Stylesheets
// -------------------------------------------------------------

function buildCSS(argv, config) {

  // Set SASS options
  var sassOptions = {};
  if(argv.minify) sassOptions.outputStyle = "compressed";

  // Load each of the application bundle files
  glob('./stylesheets/*.scss', function(err, files) {
    _.each(files, function(file) {

      // Render SASS in every of these files
      sass.render(_.assign({ file: file }, sassOptions), function(err, result) {

        // Figure out filename
        var filename = path.basename(file).replace(".scss", ".css");
        if(argv.versionize) {
          filename = filename.replace(".css", "-" + config.version + ".css")
        }
        saveFile(filename, result.css);
      });
    })
  });
}

// Main
// -------------------------------------------------------------

module.exports = function(argv, config) {

  // create build dir if doesn't exist
  mkdirp('./build', function (err) {
    if (err) {
      console.error(err)
    } else {
      buildCSS(argv, config);
      buildJS(argv, config);
    }
  });
}