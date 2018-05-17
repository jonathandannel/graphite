var userData = {
  'black': 12,
  'latino': 8,
  'native': 4,
  'asian': 8,
  'white': 15,
  'indian': 6
};

var drawBarChart = function(data, options, element) {
  var mainContainer = document.getElementById(element);
  $(mainContainer).css("padding-left", "50px");

  var addColumns = function(dataObj) {
    var specs = Object.values(dataObj);
    for (i = 0; i < specs.length; i++) {
      var column = document.createElement("div");
      column.className = "graphite-column";
      column.Id = 'column-' + (i + 1);
      column.innerHTML = '<br>' + specs[i];

      var columnValue = '';
      columnValue += (specs[i] * 20) + 'px';
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
        "font-size": "14px"
      });
      $(mainContainer).append(column);
    }
  };

  var addChartBottom = function (dataObj) {
    var specs = Object.keys(dataObj);

    var chartBottom = document.createElement("div");
    chartBottom.className = "graphite-chart-bottom";
    $(mainContainer).append(chartBottom);

    for (i = 0; i < specs.length; i++) {
      var labelName = specs[i];
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

  addColumns(data);
  addChartBottom(data);

};

drawBarChart(userData, 0, "graphite-chart-1");
