var sampleData = [12, 8, 4, 15, 7, 3, 6, 5];

var mainContainer = document.querySelector(".graphite-chart");
$(mainContainer).css("padding-left", "50px");

/*var columnColors = ['red', 'green', 'orange', 'yellow', 'blue', 'green'];*/

var addColumns = function(data) {
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("div");
    column.className = "graphite-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = '<br>' + data[i];

    var columnValue = '';
    columnValue += (data[i] * 20) + 'px';
    $(column).css({
      "display": "inline-block",
      "height": columnValue,
      "background-color": "#4d88ff",
      "vertical-align": "bottom",
      "margin-right": "30px",
      "width": "90px",
      "text-align": "center",
      "font-family": "arial",
      "text-padding": "5px",
      "font-size": "12px"
    });
    $(mainContainer).append(column);
  }
};

var words = ['one', 'two', 'three', 'four'];

var addChartBottom = function (labels) {
  var chartBottom = document.createElement("div");
  chartBottom.className = "graphite-chart-bottom";
  $(mainContainer).append(chartBottom);

  for (i = 0; i < labels.length; i++) {
    var labelName = labels[i];
    var bottomLabel = document.createElement("div");
    bottomLabel.className = "graphite-chart-bottom-label";
    bottomLabel.innerHTML = labelName;
    $(bottomLabel).css({
      "display": "inline-block",
      "padding-top": "10px",
      "margin-right": "30px",
      "text-align": "center",
      "width": "90px",
      "font-family": "arial"
    });
    $(chartBottom).append(bottomLabel);
  }
};

addColumns(sampleData);
addChartBottom(words);
