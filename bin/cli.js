#!/usr/bin/env node
var peerserve = require('../');
var portfinder = require('portfinder');
var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --port [port]', 'Set port')
  .parse(process.argv);

if(program.port){
	peerserve(program.port);
} else {
	portfinder.getPort(function (err, port) {
		if(err){
			console.log(err);
			return err;
		}
		peerserve(port);
	});
}