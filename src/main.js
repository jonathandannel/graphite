var userData = {
  'Black': 8,
  'Latino': 5,
  'Native': 4,
  'Asian': 10,
  'White': 12,
  'Indian': 7,
  'Other': 5
};

var drawBarChart = function(data, options, element) {
  //store all our chart stuff in a container
  var mainContainer = document.createElement("div");
  $(mainContainer).css({
    "position": "relative",
    "display": "flex",
    "flex-direction": "column-reverse",
    "margin-top": "20px",
    "padding-top": "30px"
  });

  //directly add chart container to specified element
  $(element).append(mainContainer);

  //add another container with all the columns styled with flexbox
  var addColumns = function(dataObject) {
    var values = Object.values(dataObject);

    var columnContainer = document.createElement("div");
    $(columnContainer).css({
      "display": "flex",
      "flex-direction": "row",
      "align-items": "flex-end",
      "position": "relative",
      "padding-top": "8px",
      "margin-left": "50px",
      "padding-bottom": "10px"
    });

    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = values[i];
      $(column).css({
        "margin-right": "30px",
        "width": "90px",
        "background-color": "#4d88ff",
        "text-align": "center",
        "text-padding": "20px",
        "height": values[i] * 20 + "px",
        "z-index": "1"
      });
      $(mainContainer).append(columnContainer);
      $(columnContainer).append(column);
    }

  };

  //add horizontal lines to tick off values
  var addSeparators = function(dataObject) {
    var values = Object.values(dataObject);

    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }

    var chartValues = Math.round(maxHeight / 4);
    for (i = maxHeight; i <= 0; i -= chartValues) {
      console.log(i);
    }

    for (i = 0; i <= maxHeight; i += Math.round(maxHeight / 4)) {
      var separatorContainer = document.createElement("div");
      separatorContainer.innerHTML = i;
      $(separatorContainer).css({
        "position": "absolute",
        "width": "100%",
        "margin-bottom": i * 20 + "px",
        "bottom": "0"
      });
      var separator = document.createElement("hr");
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
  };

  //this is where we label each column
  var addChartBottom = function (dataObj) {
    var specs = Object.keys(dataObj);

    var chartBottom = document.createElement("div");
    chartBottom.className = "graphite-chart-bottom";
    $(chartBottom).css({
      "bottom": "0",
      "position": "relative",
      "margin-left": "48px"
    });
    $(element).append(chartBottom);

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
  addColumns(data);
  addSeparators(data);
  addChartBottom(data);
};

drawBarChart(userData, 0, example);
