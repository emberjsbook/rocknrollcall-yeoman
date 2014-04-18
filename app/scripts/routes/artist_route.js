RocknrollcallYeoman.ArtistRoute = Ember.Route.extend({
  model: function(params) {
    /* pseudo-code
    XHR("some URL",{"id":params.enid},function callback(response){
      var artist = App.Artist.create({
        name: response.name,
        hotttnesss: response.hotttnesss,
      });
    });
    */
  }
});
