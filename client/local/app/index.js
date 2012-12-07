var $ = require('jquery');
var Home = require('view-home');
var Doc = require('view-doc');
var Router = require('backbone-router');

module.exports = Router.extend({

  current: null,
  next: null,

  initialize: function() {
    var views = {
      home: new Home(),
      doc: new Doc()
    };

    this.views = views;
    this.history = Router.history;
    this.history.start(/*{pushState: true}*/);
  },


  goto: function() {
    this.current && this.current.hide();
    this.next.render();
    this.current = this.next;
    this.next = null;
  },

  routes: {
    'home': 'home',
    'doc': 'doc'
  },

  home: function() {
    console.log('route: home');
    this.next = this.views.home;
    this.goto();
  },

  doc: function() {
    console.log('route: doc');
    this.next = this.views.doc;
    this.goto();
  }

});