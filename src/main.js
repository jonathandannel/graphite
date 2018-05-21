var userData = {
  'A': 28,
  'B': 61,
  'C': 44,
  'D': 39,
  'E': 22,
  'F': 48,
  'G': 15,
  'H': 30
};

var drawBarChart = function(data, options, element) {
  var containerHeight = 400;
  var containerWidth = options[1];
  var mainContainer = document.createElement("div");
  $(mainContainer).css({
    "position": "relative",
    "display": "flex",
    "flex-direction": "column-reverse",
    "margin-top": "20px",
    "padding-top": "30px",
    "height": containerHeight + 'px'
  });
  $(element).append(mainContainer);

  var addColumns = function(dataObject, height) {
    var values = Object.values(dataObject);
    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }
    var columnContainer = document.createElement("div");
    $(columnContainer).css({
      "display": "flex",
      "flex-direction": "row",
      "align-items": "flex-end",
      "position": "relative",
      "padding-top": "8px",
      "margin-left": "50px",
      "padding-bottom": "9px"
    });
    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = '<p>' + values[i];
      $(column).css({
        "margin-right": "30px",
        "width": "90px",
        "background-color": "#68b24a",
        "text-align": "center",
        "height": values[i] * (height / maxHeight) + "px",
        "z-index": "2"
      });
      $(mainContainer).append(columnContainer);
      $(columnContainer).append(column);
    }
  };
  var addSeparators = function(dataObject, height) {
    var values = Object.values(dataObject);
    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }
    for (i = 0; i <= maxHeight; i += Math.round(maxHeight / 4)) {
      var separatorContainer = document.createElement("div");
      separatorContainer.innerHTML = i;
      $(separatorContainer).css({
        "position": "absolute",
        "margin-bottom": i * (height / maxHeight) + "px",
        "bottom": "0",
        "width": "100%"
      });
      var separator = document.createElement("hr");
      $(separator).css({
        "border-style": "solid",
        "border-bottom": "1px",
        "border-color": "black"
      });
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
  };

  var addChartBottom = function (dataObj) {
    var specs = Object.keys(dataObj);
    var chartBottom = document.createElement("div");
    chartBottom.className = "graphite-chart-bottom";
    $(chartBottom).css({
      "bottom": "0",
      "display": "flex",
      "flex-direction": "row",
      "flex-align": "end",
      "position": "relative",
      "margin-left": "47px"
    });
    $(element).append(chartBottom);
    for (i = 0; i < specs.length; i++) {
      var labelName = specs[i];
      var bottomLabel = document.createElement("div");
      bottomLabel.className = "graphite-chart-bottom-label";
      bottomLabel.innerHTML = labelName;
      $(bottomLabel).css({
        "display": "inline-block",
        "margin-right": "30px",
        "text-align": "center",
        "width": "90px",
        "margin-bottom": "10px",
        "top": "0"
      });
      $(chartBottom).append(bottomLabel);
    }
  };
  addColumns(data, containerHeight);
  addSeparators(data, containerHeight);
  addChartBottom(data);
};

drawBarChart(userData, 0, example);
