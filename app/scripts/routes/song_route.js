RocknrollcallYeoman.SongRoute = Ember.Route.extend({
  model: function(params) {

    //find the song byId
    var url = "http://developer.echonest.com/api/v4/song/profile?api_key="+RocknrollcallYeoman.config.ECHO_NEST_API_KEY+"&format=json&bucket=audio_summary&bucket=song_hotttnesss&bucket=tracks&bucket=song_type&bucket=id:7digital-US", obj = {"id": params.enid}

    return Ember.$.getJSON(url, obj)
      //returns Promise object
        .then(function(data) {
        var entry = data.response.songs[0];
        var track = null;
        if (entry.tracks.length) track = entry.tracks[0];

        return RocknrollcallYeoman.Song.create({
          enid: entry.id,
          title: entry.title,
          hotttnesss: entry.song_hotttnesss,
          track: track,
          types: entry.song_type,
          audio_summary: entry.audio_summary,
          artist_id: entry.artist_id,
          artist_name: entry.artist_name
        });
      });
  }
});
