var userData = {
  'black': 12,
  'latino': 8,
  'native': 4,
  'asian': 8,
  'white': 15,
  'indian': 6,
  'other': 4
};

var drawBarChart = function(data, options, element) {
  var mainContainer = document.getElementById(element);
<<<<<<< HEAD
  $(mainContainer).css({
    "padding-left": "50px",
    "border-width": "1px",
    "border-style": "solid",
    "border-color": "black",
    "margin-left": "30px",
    "overflow": "auto",
    "position": "relative"
  });

  var specs = Object.values(data);
  var highestNumber = 0;
  for (i = 0; i < specs.length; i++) {
    if (specs[i] > highestNumber) {
      highestNumber = specs[i];
    }
  }
  var separatorIntervals = Math.round(highestNumber / 5);
  var separatorContainer = document.createElement("div");
  separatorContainer.className = "separator-container";
  $(separatorContainer).css({
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "margin-left": "-20%"
  });
  $(mainContainer).append(separatorContainer);

  for (i = 0; i <= highestNumber; i += separatorIntervals) {
    var separator = document.createElement("div");
    var separatorHeight = separatorIntervals + 'px';
    $(separator).css({
      "border-width": "1px",
      "border-style": "solid",
      "border-color": "black",
      "width": "100%",
      "height": "20%"
    });
    $(separatorContainer).append(separator);
  }
=======
  $(mainContainer).css("padding-left", "50px");
>>>>>>> c5c3ff486ef01fd3da70eeecbb4f9450d0fe29a4

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
        "font-size": "14px",
        "margin-top": "20px",
        "margin-bottom": "5px"
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
        "margin-bottom": "10px"
      });
      $(chartBottom).append(bottomLabel);
    }
  };

  addColumns(data);
  addChartBottom(data);

};

drawBarChart(userData, 0, "graphite-chart-1");
