# Asset Pipeline

This node module is a very opinionated, stand-alone asset pipeline that publishes CSS and JS assets to S3.

### `assets build`

Will build the assets.

- `--minify` will minify the assets
- `--versionize` will add version number to files

### `assets publish`

Will publish the assets to S3 using the config settings.

- `--minify` will minify the assets
- `--versionize` will add version number to files
