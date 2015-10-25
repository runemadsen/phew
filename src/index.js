#! /usr/bin/env node

// Requires
// -------------------------------------------------------------

var _ = require('lodash');
var fs = require("fs");
var argv = require('yargs').argv;
var build = require('./build');
var server = require('./server');
var publish = require('./publish');

// Variables
// -------------------------------------------------------------

var args = process.argv;
var cmd = args[2];
var commands = [
  "build",
  "server",
  "publish"
]

// Check that there's a config.json file
var config = JSON.parse(fs.readFileSync('./config.json'));
if(!config) {
  return console.log("config.json does not exist");
}

// Check that we got a correct command
if(!_.includes(commands, cmd)) {
  return console.log("Wrong command provided");
}

if(cmd == "build") build(argv, config);
else if(cmd == "server") server(argv, config);
else if(cmd == "publish") publish(argv, config);