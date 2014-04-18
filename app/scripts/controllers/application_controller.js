RocknrollcallYeoman.ApplicationController = Em.ObjectController.extend({
  searchTerms: '',
  applicationName: function() {
    var st = this.get('searchTerms');
    if (st) {
      return st + "???"
    } else {
      return "Rock'n'Roll Call"
    }
  }.property('searchTerms'),
  actions: {
    submit: function() {
      this.transitionToRoute('search-results',this.get('searchTerms'));
    }
  }
});
