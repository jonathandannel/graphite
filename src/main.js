var userData = {
  'one': 4,
  'two': 4.90,
  'three': 3.29,
  'four': 2.51,
  'five': 2.44,
  'six': 8.3,
  'seven': 4.02
};

var userOptions = {
  'width': '',
  'height': '',
  'barColor': 'surprise',
  'title': ''
};

var drawBarChart = function(data, options, element) {
  var containerHeight = 200;
  var containerWidth = 450;
  var barColor = '';
  var title = '';

  //width of 600 can fit max 10 columns
  //width of 500 can fit max 8 columns
  //width of 400 can fit max 6 columns
  //width 350 can fit 6
  //width of 300 can fit max 5 columns
  //width of 250 can fit 4
  //width of 200 can fit max 2 columns

  var handleUserDimensions = function(dataObject, optionsObject) {
    var keyCount = Object.keys(dataObject);
    var width = optionsObject.width;
    var minWidth = 200;
    if (keyCount.length) {
      console.log(null);

    }
  };

  var setDefaultDimensions = function(dataObject) {
    var l;
  };

  var setUserOptions = function(_options) {
    if (_options.width < 400) {
      containerWidth = 900;
    } else if (_options.height < 200) {
      containerHeight = 400;
    } else if (options.title.length < 1) {
      title = "Untitled Graph";
    }
  };


  var mainContainer = document.createElement("div");
  $(mainContainer).css({
    "position": "relative",
    "display": "flex",
    "flex-direction": "column-reverse",
    "margin-top": "75px",
    "margin-left": "10px",
    "height": containerHeight + 'px',
    "width": containerWidth + 'px',
    "font-family": "arial",
    "font-size": "14px",
    "color": "#4c4a4c"
  });

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
      "margin-left": "40px"
    });

    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = '<p>' + values[i];
      $(column).css({
        "margin-right": (width / values.length) / 6 + "px",
        "width": width / values.length + "px",
        "background": "linear-gradient(rgb(189, 168, 193), rgb(206, 192, 209))",
        "text-align": "center",
        "height": values[i] * (height / maxHeight) - 1 + "px",
        "z-index": "2",
        "color": "#383434"
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
        "border-bottom": "2px"
      });
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
    $(".separator-0").css({
      "border-style": "solid",
      "border-top": "1px",
      "border-color": "#727272"
    });
  };

  addColumns(data, containerHeight, containerWidth);
  addSeparators(data, containerHeight);
};

drawBarChart(userData, userOptions, example);
