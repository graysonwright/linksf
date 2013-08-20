var $          = require('jquery'),
    Handlebars = require('handlebars-runtime');

require('jquery-serialize-object');
require('bootstrap');

//Register partials
Handlebars.registerPartial("filterCategories", require('templates/_filter_categories'));
Handlebars.registerPartial("editService", require('templates/_edit_service'));
Handlebars.registerPartial("nav", require('templates/_nav'));
Handlebars.registerPartial("queryRepresentation", require('templates/_query_representation'));
Handlebars.registerPartial("category", require('templates/_category'));

$(function() {
  var Parse = require('parse');

  Parse.initialize("Z2l0Zn6NGrHCDoBPKUeD7Tf1fAUDaazQihQFqnL8", "kGPp7cydleuFbhKB4mrviTmbIjrbTjhxGP4dP7Ls");

  // provision the router instance
  var router = require('routers/router').instance;

  // begin tracking hashChange
  require('backbone').history.start();
});
