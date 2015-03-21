var express = require('express');
var redis = require('redis');
var bodyParser = require('body-parser');
var client = redis.createClient(6379, process.env.redis);
var app = express();

app.use(bodyParser.json());

app.post('/write', function(req, res){

  client.lpush('text_queue', req.body.text, function queueSentText (err, reply) {
    res.status(201).send();
  });

});

module.exports = app;
