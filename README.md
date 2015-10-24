# Phew

Phew is a simple, opinionated, stand-alone asset pipeline that builds CSS (SCSS) and JavaScript (ECMAScript 6) assets into bundles, and publishes them to S3, so they can be referenced from your HTML pages.

I was tired of bundling my JS and CSS assets into my Golang binaries, and realized that a simple thing like using version numbers instead of fingerprints in my asset filenames would allow me to completely remove my assets from my web server repo, while preserving the nice cache invalidation that comes with fingerprinted files. 

With Phew, I just need to maintain a single constant in my web server, the asset version number, and I can eliminate all the headaches that come from asset precompilation and merge conflicts in `manifest.json` files.

## The way it works

Phew will build any file located in the root of the `javascripts` or `stylesheets` folders from where the command is run. This means that you can create multiple JS and CSS bundles by having files that imports other files from subfolders. CSS files use the `@import` statement. JS files use the `import` statement. 

See the `example` folder for a simple example.

## Getting started

1. Create a `config.json` file in your new assets folder, with at least a `version` property. This determines the version number in the compiled asset filenames.
2. Create a `javascripts` and `stylesheets` folder and add files
3. Run `phew build`

Voila!

## Commands

#### `phew build`

Will build the assets.

- `--minify` will minify the assets
- `--versionize` will add the version number to the files

#### `phew server` (NOT IMPLEMENTED)

Used for development. Simply boot up Phew and load your assets from `localhost:port`. Phew will automatically watch for changes to assets and restart the server.

- `--port` will set the localhost port

#### `phew publish` (NOT IMPLEMENTED)

Will publish the assets to S3 using the config settings.

- `--minify` will minify the assets
- `--versionize` will add version number to files
