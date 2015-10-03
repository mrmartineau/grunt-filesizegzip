/*
 * grunt-filesizegzip
 * https://github.com/mrmartineau/grunt-filesizegzip
 *
 * Copyright (c) 2015 Zander Martineau
 * Licensed under the MIT license.
 */
'use strict';
var filesizegzip = require('filesizegzip');

module.exports = function(grunt) {

	grunt.registerMultiTask('filesizegzip', 'Output file size information', function() {

		var options = this.options({
			gzip: grunt.option('gzip') || true
		});

		this.filesSrc.forEach(function(filepath) {
			grunt.log.ok(filepath +': '+ filesizegzip(grunt.file.read(filepath), options.gzip));
		});

	});

};
