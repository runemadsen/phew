var s3 = require('s3');
var _ = require('lodash');

// Publish
// -------------------------------------------------------------

module.exports = function(argv, config) {

  var params = _.defaults({}, argv, config);

  if(!params.s3Id || !params.s3Secret || !params.s3Bucket) return console.log("No s3Id, s3Secret or s3Bucket provided");

  var client = s3.createClient({
    s3Options: {
      accessKeyId: params.s3Id,
      secretAccessKey: params.s3Secret
    },
  });

  var params = {
    localDir: "build",
    s3Params: {
      Bucket: params.s3Bucket,
      CacheControl: params.cacheControl || 'public, max-age=31536000'
    }
  };

  if(params.s3Prefix) params.s3Params.Prefix = params.s3Prefix;

  var uploader = client.uploadDir(params);

  uploader.on('error', function(err) {
    console.error("unable to sync:", err.stack);
  });

  uploader.on('end', function() {
    console.log("Uploaded assets to S3");
  });

}