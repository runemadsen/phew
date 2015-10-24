# Phew

Phew is a simple, opinionated, stand-alone asset pipeline that builds and publishes SASS and ES6 JavaScript assets to S3.

Phew makes it easy to have a stand-alone assets repo that publishes to S3, whereafter these assets can be referenced in your HTML only by knowing the version number.

## Configuration

Phew will build any file located in the root of `javascripts` or `stylesheets` in the folder where the `phew` command is run.

This means that you can create multiple JS and CSS bundles by having several files that imports other files in subfolders. See the `example` folder for a basic example.

Phew requires you to add a `config.json` file in the folder that the `phew` command is being run. This file must at least have a `version` property that is used when using `--versionize`.

## Commands

#### `phew build`

Will build the assets.

- `--minify` will minify the assets
- `--versionize` will add the version number to the files

#### `phew publish` (NOT IMPLEMENTED)

Will publish the assets to S3 using the config settings.

- `--minify` will minify the assets
- `--versionize` will add version number to files
