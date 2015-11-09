'use strict';

var assert = require('assert');
var superagent = require('superagent');
var uuid = require('node-uuid');
var express = require('express');
var app = express();
var requestId = require('../');

app.get('/', function(req, res){
  res.send(req.get('X-Request-ID'));
});
app.listen(3000);

describe('superagent-requestid', function() {
  var generateId = uuid.v4;
  var id = uuid.v4();

  beforeEach(function() {
    uuid.v4 = function() { return id; };
  });

  afterEach(function() {
    uuid.v4 = generateId;
  });

  it('sets the X-Request-ID header', function(done) {
    superagent
      .get('http://localhost:3000')
      .use(requestId)
      .end(function(err, res) {
        assert(res.ok);
        assert.strictEqual(res.text, id);
        done();
      });
  });
});
