var PeerServer = require('peer').PeerServer,
	portfinder = require('portfinder');

portfinder.getPort(function (err, port) {
	if(err)
		return err;
	var server = new PeerServer({ port: port , debug: true});
	console.log("new peer server listening on "+port);
});