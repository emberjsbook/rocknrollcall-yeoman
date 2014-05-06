RocknrollcallYeoman.HeatMapComponent = Ember.Component.extend({
  margin: { top: 50, right: 0, bottom: 100, left: 30 },
  width: 900,
  height: 280,
  gridSize: 37,
  legendElementWidth: 100,
  buckets: 9,
  colors: ["#2F0000","#661201","#911900","#B22604","#CB3804","#F25B02","#F2720D","#FFA321","#FAC40A"], // alternatively colorbrewer.YlGnBu[9]
  days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  times: ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"],

  draw: function(myData){
    var self = this;
    this.set('data',myData);
    console.log(this.get('data'));
    var svg = d3.select('#'+self.get('elementId'));
    var colorScale = d3.scale.quantile()
      .domain([10, 100])
      .range(self.colors);

    var svg = d3.select("#chart").append("svg")
      .attr("width", self.width + self.margin.left + self.margin.right)
      .attr("height", self.height + self.margin.top + self.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

    var dayLabels = svg.selectAll(".dayLabel")
      .data(self.days)
      .enter().append("text")
      .text(function (d) { return d; })
      .attr("x", 0)
      .attr("y", function (d, i) { return i * self.gridSize; })
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + self.gridSize / 1.5 + ")")
      .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

    var timeLabels = svg.selectAll(".timeLabel")
      .data(self.times)
      .enter().append("text")
      .text(function(d) { return d; })
      .attr("x", function(d, i) { return i * self.gridSize; })
      .attr("y", 0)
      .style("text-anchor", "middle")
      .attr("transform", "translate(" + self.gridSize / 2 + ", -6)")
      .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

    var heatMap = svg.selectAll(".hour")
      .data(self.data)
      .enter().append("rect")
      .attr("x", function(d) { console.log(parseInt(d.hour),d.hour,d); return (d.hour - 1) * self.gridSize; })
      .attr("y", function(d) { return (d.day - 1) * self.gridSize; })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("class", "hour bordered")
      .attr("width", self.gridSize)
      .attr("height", self.gridSize)
      .style("fill", self.colors[0]);

    heatMap.transition().duration(1000)
      .style("fill", function(d) { return colorScale(d.value); });

    heatMap.append("title").text(function(d) { return d.value; });

    var legend = svg.selectAll(".legend")
      .data([0].concat(colorScale.quantiles()), function(d) { return d; })
      .enter().append("g")
      .attr("class", "legend");

    legend.append("rect")
      .attr("x", function(d, i) { return self.legendElementWidth * i; })
      .attr("y", self.height)
      .attr("width", self.legendElementWidth)
      .attr("height", self.gridSize / 2)
      .style("fill", function(d, i) { console.log(this); return self.colors[i]; });

    legend.append("text")
      .attr("class", "mono")
      .text(function(d) { return "≥ " + Math.round(d*10)/10; })
      .attr("x", function(d, i) { return self.legendElementWidth * i; })
      .attr("y", self.height + self.gridSize);
  },

  didInsertElement: function(){
    var data = this.get('controller.data.content');
    var hotnessArray = [];
    for (var i=0;i<data.length;i++) {
      var date = new Date(data[i].get('timestamp'));
      var row = {};
      row.day = date.getDay() + 1;
      row.hour = date.getHours() + 1;
      row.value = data[i].get('hotttnesss');
      hotnessArray.push(row);
    }
    this.draw(hotnessArray);
  }
});
