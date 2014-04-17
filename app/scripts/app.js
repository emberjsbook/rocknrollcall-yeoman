var RocknrollcallYeoman = window.RocknrollcallYeoman = Ember.Application.create();

RocknrollcallYeoman.applicationName = "Rock'n'Roll Call";

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
