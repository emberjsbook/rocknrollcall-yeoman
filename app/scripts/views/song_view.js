RocknrollcallYeoman.SongView = Em.View.extend({
  didInsertElement: function() {
    $('#song-duration').text(function(){
      var $this = $(this);
      var origSeconds = $this.attr('data-duration');
      var minutes = Math.floor(origSeconds/60);
      var seconds = Math.floor(origSeconds % 60);
      return minutes + ":" + seconds
    });
  }
});
