var $ = require('jquery');
var domify = require('domify');
var backbone_view = require('backbone-view');
var template = require('./template');


module.exports = backbone_view.extend({

  initialize: function(options) {
    console.log('initializing view-doc with options: ');
    console.log(options);

    var domified = $(template);
    console.log(domified);
    this.$el = domified;
    console.log($('body'));
    $('body').append(domified);
    return this;
  },

  render: function() {
    this.$el.show();
    return this;
  },

  hide: function() {
    console.log('view-doc - hide');
    this.$el.hide();
  },

  events: {}

});