var userData = {
  'White': 38,
  'Black': 41,
  'Hispanic': 61,
  'Asian': 39,
  'Indian': 52,
  'Middle Eastern': 48,
  'Native': 15,
  'Islander': 30
};

var drawBarChart = function(data, options, element) {
  var containerHeight = 200;
  var containerWidth = 1200;
  var mainContainer = document.createElement("div");
  $(mainContainer).css({
    "position": "relative",
    "display": "flex",
    "flex-direction": "column-reverse",
    "margin-top": "75px",
    "margin-left": "10px",
    "height": containerHeight + 'px',
    "width": containerWidth + 'px'
  });

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
      "margin-left": "44px"
    });

    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = '<p>' + values[i];
      $(column).css({
        "margin-right": (width / values.length) / 6 + "px",
        "width": width / values.length + "px",
        "background-color": "#68b24a",
        "text-align": "center",
        "height": values[i] * (height / maxHeight) + "px",
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
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
    $(".separator-0").css({
      "border-style": "solid"
    });
  };

  addColumns(data, containerHeight, containerWidth);
  addSeparators(data, containerHeight);
};

drawBarChart(userData, 0, example);
