/* !
 * server
 * codedoc server
 * Copyright (c) 2012 Enrico Marino e Federico Spini
 * MIT License
 */

var credentials = {
  client_id: 'd5fe8387aa71341450d5',
  client_secret: '61b270213fdb85256d7cc83983194896856cb636'
};

var express = require('express');
var request = require('superagent');
var async = require('async');
var join = require('path').join;
var redox = require('redox');
var finder = require('github-finder')(credentials);

var server = express();

server
  .use(express.bodyParser())
  .use(express.static(__dirname + '/public'))
  .listen(8002);

server.get('/:user/:project', function(req, res) {
  var params = req.params;
  var docs = [];
  var parsed;

  finder.open({user: params.user, project: params.project})
    .on('file', function (file) {
      if (file.name.match(/.js$/)) {
        parsed = redox.parse((new Buffer(file.content, 'base64')).toString());
        docs.push({
          name: file.name,
          path: file.path,
          docs: parsed.docs,
          codes: parsed.codes
        });
      }
    })
    .on('end', function() {
        res.send(docs);
    });
});
