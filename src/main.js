var userData = {
  'black': 12,
  'latino': 8,
  'native': 4,
  'asian': 8,
  'white': 16,
  'indian': 6,
  'other': 5
};

var drawBarChart = function(data, options, element) {
  var mainContainer = document.getElementById(element);
  $(mainContainer).css({
    "margin-left": "10px"
  });

  var addSeparators = function(dataObj) {

    var specs = Object.values(dataObj);
    var highestNumber = 0;
    for (i = 0; i < specs.length; i++) {
      if (specs[i] > highestNumber) {
        highestNumber = specs[i];
      }
    }

    var interval = Math.round(highestNumber * 20) / 5;
    console.log(interval);

    for (i = 1; i < 6; i++) {
      var separator = document.createElement("hr");
      $(separator).css({
        "position": "absolute",
        "width": "100%",
        "margin-top": (interval * i) + "px"
      });
      $(mainContainer).append(separator);
    }


  };

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
        "position": "relative",
        "height": columnValue,
        "margin-right": "30px",
        "width": "90px",
        "background-color": "#4d88ff",
        "vertical-align": "bottom",
        "text-align": "center",
        "font-family": "arial",
        "text-padding": "5px",
        "font-size": "14px",
        "z-index": "2"
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
        "font-family": "arial",
        "margin-bottom": "10px",
        "overflow": "auto"
      });
      $(chartBottom).append(bottomLabel);
    }
  };
  addSeparators(data);
  addColumns(data);
  addChartBottom(data);
};

drawBarChart(userData, 0, "graphite-chart-1");
