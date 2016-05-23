'use strict';
var request = require('supertest');
var express = require('express');
var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../server/config/requests.js');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('PhotoAnalysisReq', function() {
	it('Takes in a URL', function(done) {
		request(app)
		.post('/recipes')
		.send({
			'url': 'not a url'})
		.expect(404)
		.end(done);
	});

});

