var $ = require('jquery');
var domify = require('domify');
var View = require('backbone-view');
var template = require('./template');
var template_api = require('./template-api');
var example = require('./example-json')
require('handlebars.js');

module.exports = View.extend({

  initialize: function (options) {
    this.setElement(domify(template));
    this.compiled = Handlebars.compile(template_api);
    return this;
  },

  render: function (docs) {
    this.$el
      .show()
      .find('#doc-api')
      .html(this.compiled(example));

    return this;
  },

  hide: function() {
    this.$el.hide();
    return this;
  },

  events: {}

});