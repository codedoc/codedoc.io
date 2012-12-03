var page = require('visionmedia-page.js');
var stick = require('onirame-stick');

(function () {

var self = codedoc.router = {

  previous: new stick.View({}),

  current: new stick.View({}),

  director: new Router().init(),

  goto: function (to) {
    page();
  },

  replace: function (to) {
    geomefree.log('replace', to);
    var to = to.indexOf('#') === 0 ? to : '#' + to;
    document.location.replace(to);
  },

  change: function (view) {
    geomefree.log('change ' + view.root.attr('id'));
    self.previous = self.current;
    self.previous.root.hide();
    self.current = view;
    self.current.root.show();
  },

  on: function (route, fun) {
    self.director.on(route, fun);
  }

};

}());