var PeerServer = require('peer').PeerServer;

module.exports = function(port){
	var server = new PeerServer({ port: port});
	console.log("new peer server listening on "+port);
}