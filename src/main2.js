var sampleData = [2, 4, 5, 7, 8];

var mainContainer = document.querySelector(".graphite-container");

var graphiteChart = document.createElement("div");
graphiteChart.className = "graphite-chart";
mainContainer.append(graphiteChart);

var addColumns = function(data) {
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("div");
    column.className = "graphite-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = column.Id;
    var columnValue = '';
    columnValue += (data[i] * 25) + 'px';
    $(column).css({
      "display": "inline-block",
      "height": columnValue,
      "background-color": "purple"
    });
    $(graphiteChart).append(column);

  }
};

addColumns(sampleData);
