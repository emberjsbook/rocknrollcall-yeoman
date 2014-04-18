RocknrollcallYeoman.Router.map(function() {
  this.route('search-results', {
    path: 'search/:term'
  });
  this.route('artist');
  this.route('song');
});
