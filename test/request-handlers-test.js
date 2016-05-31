'use strict';
var request = require('supertest');
var express = require('express');
var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon').sinon;
// var server = require('../server/server.js');
var app = require('../server/config/requests.js');

describe ('request hanlders', function () {
// 	before(function(done){
//     sinon
//       .stub(request, 'post')
//       .yields(null, null, JSON.stringify({}));
//     done();
//   });
	
// 	after(function(done){
//     request.get.restore();
//     done();
//   });
		
	describe('PhotoAnalysisReq', function() {
		
		it('should accept an image file', function (done) {
			var image = '../client/assets/empty_plate.jpg'
			var photoAnalysis = photoAnalysisReq(image);
			
			assert.doesNotThrow(photoAnalysis, function(err, image) {
        expect(err).to.be.an.instanceof(Error);
				done()
				}, 'function does not throw');
			});
		
		it ('should post image to Immga', function () {
			
		});
		
		it ('should receive a JSON object', function () {
			
		});
		
		it ('should parse the JSON object for an ingredient', function () {
			
		});
		
		it ('should return the ingredient name', function () {
			
		});

	});

	describe('recipesReq', function() {
		it('takes in an array', function() {
			
		});
		
		it ('should stringify ingredient list', function () {
			
		});
		
		it ('should post ingredient to Food2Fork', function () {
			
		});
		
		it ('should return an array of recipe objects', function () {
			
		});

	});


	describe('recipesReq', function() {
		it('Takes in a URL', function(done) {
			request(app)
			.post('/recipes')
			.send({
				'url': 'not a url'})
			.expect(404)
			.end(done);
		});
	});
		
});