var $ = require('jquery');
var domify = require('domify');
var View = require('backbone-view');
var handlebars = require('handlebars');
var template = require('./template');
var template_api = require('./template-api');

module.exports = View.extend({

  initialize: function (options) {
    this.setElement(domify(template));
    this.t = handlebars.compile(template_api);
    return this;
  },

  render: function (docs) {
    this.$el
      .find('#doc-api')
      .html(this.t(docs));

    return this;
  },

  hide: function() {
    this.$el.hide();
    return this;
  },

  events: {}

});