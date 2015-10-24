# Phew

Phew is a simple, opinionated, stand-alone asset pipeline that builds CSS (SCSS) and JavaScript (ECMAScript 6) assets into bundles, and publishes them to S3, so they can be referenced from your HTML pages.

I was tired of bundling my JS and CSS assets into my Golang binaries, and realized that a simple thing like using version numbers instead of fingerprints in my asset filenames would allow be to completely detach my assets from my web server code, while preserving the nice cache invalidation that comes with fingerprinted files. 

With Phew, I just need to maintain a single constant in my web server, the asset version number.

## Configuration

Phew will build any file located in the root of the `javascripts` or `stylesheets` folders. This means that you can create multiple JS and CSS bundles by having files that imports other files from subfolders.

Phew requires you to add a `config.json` file in the folder where the `phew` command is run. This file must at least have a `version` property that is used when using `--versionize`.

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
