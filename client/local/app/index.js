var $ = require('jquery');
var Home = require('home');
var Doc = require('doc');
var Router = require('backbone-router');

module.exports = Router.extend({

  current: null,
  next: null,

  initialize: function() {
    var anchors = {
      home: $('#home'),
      doc: $('doc')
    };

    var views = {
      home: new Home(),
      doc: new Doc()
    };

    anchors.home.after(views.home.el);
    anchors.doc.after(views.doc.el);

    this.views = views;
    this.anchors = anchors;
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