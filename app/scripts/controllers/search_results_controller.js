RocknrollcallYeoman.SearchResultsController = Em.ObjectController.extend({
  artistsIsChecked: true,
  songsIsChecked: true,
  actions: {

    viewedArtist: function(model) {

      var date = Date.now();

      var activity = this.store.createRecord('activity', {
        display_id: model.enid,
        type: model.type,
        display_name: model.name,
        hotttnesss: model.hotttnesss,
        timestamp: date
      });

      activity.save();

    },

    viewedSong: function(model) {

      var date = Date.now();

      var activity = this.store.createRecord('activity', {
        display_id: model.enid,
        type: model.type,
        display_name: model.artist_name,
        hotttnesss: model.hotttnesss,
        timestamp: date
      });

      activity.save();

    }
  }
});
