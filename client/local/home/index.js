var $ = require('jquery');
var domify = require('domify');
var backbone_view = require('backbone-view');
var template = require('./template');


module.exports = backbone_view.extend({

  initialize: function(options) {
    this.setElement(domify(template));
    return this;
  },

  render: function() {
    this.$el.show();
    return this;
  },

  hide: function() {
    this.$el.hide();
    return this;
  },

  events: {}

});