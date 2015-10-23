#! /usr/bin/env node

// Requires
// -------------------------------------------------------------

var _ = require('lodash');
var argv = require('yargs').argv;
var build = require('./build');

// Variables
// -------------------------------------------------------------

var args = process.argv;
var cmd = args[2];
var commands = [
  "build",
  "publish",
  "server"
]

// Check that there's an assets.json file in cwd

// Check that we got a correct command
if(!_.includes(["build"], cmd)) {
  console.log("Wrong command provided");
  return;
}

if(cmd == "build") build(argv);