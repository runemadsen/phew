var s3 = require('s3');

// Publish
// -------------------------------------------------------------

module.exports = function(argv, config) {

  var s3Id = argv.s3Id || config.s3Id;
  var s3Access = argv.s3Access || config.s3Access;

  if(!s3Id || !s3Access) return console.log("No s3Id or s3Access setting provided")

  var client = s3.createClient({
    s3Options: {
      accessKeyId: s3Id,
      secretAccessKey: s3Access
    },
  });

}