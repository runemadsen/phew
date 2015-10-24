var _ = require('lodash');
var glob = require("glob");
var sass = require('node-sass');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var browserify = require('browserify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');

// Javascripts
// -------------------------------------------------------------

function buildJS(argv, config) {

  // Load each of the root scss files
  glob('./javascripts/*.js', function(err, files) {
    _.each(files, function(file) {

      // Figure out filename
      var filename = path.basename(file);
      if(argv.versionize) {
        filename = filename.replace(".js", "-" + config.version + ".js")
      }

      // run browserify
      var bundler = browserify(file, {})
        .transform(babelify)

      if(argv.minify) bundler.transform(uglifyify);

      bundler.bundle()
        .on('error', function(err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("./build/" + filename));
    });
  });
}

// Stylesheets
// -------------------------------------------------------------

function buildCSS(argv, config) {

  // Set SASS options
  var sassOptions = {};
  if(argv.minify) sassOptions.outputStyle = "compressed";

  // Load each of the root scss files
  glob('./stylesheets/*.scss', function(err, files) {
    _.each(files, function(file) {

      // Render SASS in every of these files
      sass.render(_.assign({ file: file }, sassOptions), function(err, result) {

        // Figure out filename
        var filename = path.basename(file).replace(".scss", ".css");
        if(argv.versionize) {
          filename = filename.replace(".css", "-" + config.version + ".css")
        }

        // save file
        fs.writeFile("./build/" + filename, result.css, function(err) {
          if(err) return console.log(err);
          console.log("The file was saved!");
        });

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