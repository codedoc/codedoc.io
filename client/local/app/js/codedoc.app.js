var $ = require('component-jquery');


$(function() {

  page('/', index);
  // page('/:user/:project', doc);
  // page('/#/:user/:project', doc);
  page('*', notfound);
  page();

  function index(ctx, next) {
    $('#home').show();
  }

  function notfound() {
    $('body').text('NOT FOUND');
  }
});