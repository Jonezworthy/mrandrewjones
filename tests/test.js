var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:4200");



describe("Basic page response test", function() {

    new(require('./test-pagestatus'))(server, should);

});