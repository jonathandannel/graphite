//var drawBarChart = function(data, options, element) {
//};

var sampleData = [1, 2, 3, 4, 5];
var chart = document.getElementById('graphite-chart');

var addColumns = function(col) {
  for (i = 0; i < col; i++) {
    var column = document.createElement("div");
    column.className = "individual-column";
    chart.append(column);
  }
};

addColumns(sampleData.length);
