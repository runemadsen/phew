var _ = require('lodash');
var glob = require("glob");
var sass = require('node-sass');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

function saveFile(filename, content) {
  fs.writeFile("./build/" + filename, content, function(err) {
    if(err) return console.log(err);
    console.log("The file was saved!");
  });
}

function buildJS() {

}

function buildCSS() {
  glob('./stylesheets/*.scss', function(err, files) {
    _.each(files, function(file) {
      sass.render({ file: file }, function(err, result) {
        var filename = path.basename(file).replace(".scss", ".css");
        saveFile(filename, result.css);
      });
    })
  });
}

module.exports = function(argv) {
  mkdirp('./build', function (err) {
    if (err) {
      console.error(err)
    } else {
      buildCSS();
      buildJS();
    }
  });
}