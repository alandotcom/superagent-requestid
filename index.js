'use strict';

var superagent = require('superagent');
var uuid = require('node-uuid');

module.exports = function(request) {
  if (request instanceof superagent.Request) {
    request.set('X-Request-ID', uuid.v4());
  }
}
