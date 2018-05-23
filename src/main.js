var userData = {
  'Io': 1.032,
  'Europa': 1.45,
  'Ganymede': 1.044,
  'Callisto': 2.01
};

var drawBarChart = function(data, options, element) {
  var containerHeight = 300;
  var containerWidth = 900;
  var barColor = '';
  var mainContainer = document.createElement("div");
  $(mainContainer).css({
    "position": "relative",
    "display": "flex",
    "flex-direction": "column-reverse",
    "padding-top": "10px",
    "margin-top": "75px",
    "margin-left": "10px",
    "height": containerHeight + 'px',
    "width": containerWidth + 'px',
    "font-family": "arial",
    "color": "#4c4a4c"
  });

  var title = "Densities of Jupiter's moons (g/cm²) ";
  var graphTitle = document.createElement("div");
  graphTitle.innerHTML = "<h1>" + title + "</h1>";
  $(graphTitle).css({
    "font-family": "arial",
    "text-align": "center",
    "font-weight": "400",
    "color": "#4c4a4c",
    "width": containerWidth + 'px'
  });

  $(element).append(graphTitle);
  $(element).append(mainContainer);

  var addColumns = function(dataObject, height, width) {
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
      "padding-bottom": "9px",
      "margin-left": "50px"
    });

    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = '<p>' + values[i];
      $(column).css({
        "margin-right": (width / values.length) / 6 + "px",
        "width": width / values.length + "px",
        "background": "linear-gradient(rgb(189, 168, 193), rgb(206, 192, 209))",
        "text-align": "center",
        "height": values[i] * (height / maxHeight) + 1 + "px",
        "z-index": "2"
      });
      var columnLabel = document.createElement("div");
      columnLabel.innerHTML = Object.keys(dataObject)[i];
      $(columnLabel).css({
        "margin-top": values[i] * (height / maxHeight) - 10 + "px"
      });
      $(mainContainer).append(columnContainer);
      $(columnContainer).append(column);
      $(column).append(columnLabel);
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
      separator.className = "separator-" + i;
      $(separator).css({
        "height": "1px"
      });
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
    $(".separator-0").css({
      "border-bottom": "2px"
    });
  };

  addColumns(data, containerHeight, containerWidth);
  addSeparators(data, containerHeight);
};

drawBarChart(userData, 0, example);
