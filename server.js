var app = require('./app.js');
var server = app.listen(5002);

console.log('server is listening on port : ', 5002);

module.exports = server;
