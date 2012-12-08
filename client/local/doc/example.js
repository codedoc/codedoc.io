/*!
 * Library
 * Copyright (c) 2010 Author Name <Author Email>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.0.1';

/**
 * Constructor
 * return something cool
 * 
 * @return {Contructor} something cool
 * @api public
 */

function Constructor (options) {
  this.options = options;
}

/**
 * method
 * do something cool
 * 
 * @param {String} secret secret param.
 * @return {Boolean} `true` or `false`.
 * @api public
 */

Constructor.prototype.method = function (secret) {
  return secret === '' ? true : false;
};
