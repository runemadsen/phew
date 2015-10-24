# Phew

Phew is a simple, opinionated, stand-alone asset pipeline that builds and publishes SASS and ES6 JavaScript assets to S3.

Phew makes it easy to have a stand-alone assets repo that publishes assets to S3, whereafter these assets can be referenced in your HTML only by knowing the version number.

## Configuration

Simply add `javascripts` and `stylesheets` folders with `.scss` and `.js` files, and `phew` will build each of these files into an asset bundle. You can use `@import` in your `.scss` files and `import` in your `.js` files to combine files from subfolders.

You also need to add a `config.json` file that at least defines the version number to use when versionizing. Look in the `example` folder to see a basic setup.

## Commands

#### `phew build`

Will build the assets.

- `--minify` will minify the assets
- `--versionize` will add version number to files

#### NOT READY `phew publish`

Will publish the assets to S3 using the config settings.

- `--minify` will minify the assets
- `--versionize` will add version number to files
