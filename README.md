# Phew

Phew is a simple, opinionated, stand-alone asset pipeline that builds CSS (SCSS) and JavaScript (ECMAScript 6) assets into bundles, and publishes them to S3, so they can be referenced from your HTML pages.

I was tired of bundling my JS and CSS assets into my Golang binaries, and realized that a simple thing like using version numbers instead of fingerprints in my asset filenames would allow me to completely remove my assets from my web server repo, while preserving the nice cache invalidation that comes with fingerprinted files. 

With Phew, I just need to maintain a single constant in my web server, the asset version number, and I can eliminate all the headaches that come from checking in your frontend code with your backend code. For services like Elastic Beanstalk and Heroku that uses your Git repo as a delivery mechanism, this repo can help you tremendously (no merge conflicts in compiled assets, etc).

## The way it works

Phew will build any file located in the root of the `javascripts` or `stylesheets` folders from where the command is run. This means that you can create multiple JS and CSS bundles by having files that imports other files from subfolders. CSS files can use the `@import` statement. JS files can use the `import` statement. 

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

#### `phew server`

Use the `server` command for local development. Simply point your HTML asset links to the phew server, and it'll recompile assets whenever they change.

- `--port` will set the localhost port
- `--minify` (see above)
- `--versionize` (see above)

#### `phew publish` (NOT IMPLEMENTED)

Will publish the assets to S3 using the config settings.

- `--minify` (see above)
- `--versionize` (see above)
