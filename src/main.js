//var drawBarChart = function(data, options, element) {
//};

var sampleData = [1, 2, 3, 4, 5];
var chart = document.getElementById('graphite-chart');

var addColumns = function(data) {
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("div");
    column.className = "individual-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = column.Id;
    chart.append(column);
  }
};


addColumns(sampleData);
