var sampleData = [4, 6, 7, 1, 24, 22];

var mainContainer = document.querySelector(".graphite-container");

var graphiteChart = document.createElement("table");
graphiteChart.className = "graphite-chart";
mainContainer.append(graphiteChart);

var addColumns = function(data) {
  var row = document.createElement("tr");
  graphiteChart.append(row);
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("td");
    column.className = "graphite-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = column.Id;
    $(column).css({
      "background-color": "#9933ff",
      "height": "400px"
    });
    row.append(column);

  }
};

addColumns(sampleData);
