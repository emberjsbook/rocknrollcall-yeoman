RocknrollcallYeoman.Activity = DS.Model.extend({
  display_id: DS.attr('string'),
  type: DS.attr('string'),
  display_name: DS.attr('string'),
  hotttnesss: DS.attr('number'),
  timestamp: DS.attr()
});

RocknrollcallYeoman.Activity.FIXTURES = [{
  id: 0,
  display_id: "Activity1",
  type: "song",
  display_name: "On the Road Again",
  hotttnesss: 54,
  timestamp: "Fri Dec 06 2013 01:05:53 GMT-0600 (CST)"
}, {
  id: 1,
  display_id: "Activity2",
  type: "artist",
  display_name: "Willie Nelson",
  hotttnesss: 99,
  timestamp: "Fri Dec 06 2013 01:05:53 GMT-0600 (CST)"
}]
