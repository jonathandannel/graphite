var userData = {
  'black': 15,
  'latino': 8,
  'native': 4,
  'asian': 8,
  'white': 8,
  'indian': 6,
  'other': 5
};

var drawBarChart = function(data, options, element) {
  var highestNumberPx = 0;
  var mainContainer = document.getElementById(element);
  $(mainContainer).css({
    "margin-left": "10px",
    "position": "relative"
  });

  var addColumns = function(dataObj) {
    var specs = Object.values(dataObj);
    var highestPixel = 0;

    for (i = 0; i < specs.length; i++) {
      var column = document.createElement("div");
      column.className = "graphite-column";
      column.Id = 'column-' + (i + 1);
      column.innerHTML = '<br>' + specs[i];
      var columnValue = 0;

      columnValue = (specs[i] * 20);
      if (columnValue > highestPixel) {
        highestPixel = columnValue;
      }

      $(column).css({
        "display": "inline-block",
        "position": "relative",
        "height": columnValue + "px",
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

    var addSeparators = function (dataObj, pixelHeight) {
      var heightdivided = Math.round(pixelHeight / 4);
      console.log(pixelHeight);

      for (i = 0; i <= pixelHeight; i += heightdivided) {
        var separator = document.createElement("hr");
        console.log(i);
        $(separator).css({
          "position": "absolute",
          "width": "100%",
          "margin-top": i + "px",
          "top": "0"
        });
        $(mainContainer).append(separator);
      }
    };
    addSeparators(data, highestPixel);
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
  console.log(highestNumberPx);
  addColumns(data);
  addChartBottom(data);
};

drawBarChart(userData, 0, "graphite-chart-1");
