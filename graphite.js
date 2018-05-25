function graphite(data, options, element) {

  /* Make sure user's width parameter is wide enough to hold the amount of bars. */
  var handleUserWidth = function(_data, _options) {
    var keyCount = Object.keys(_data).length;
    var minWidth;
    var width = _options.width;
    if (keyCount <= 3) {
      minWidth = 200;
    } else {
      x = keyCount - 3;
      minWidth = x * 50 + 200;
    }
    if (width < minWidth) {
      return minWidth;
    } else {
      return width;
    }
  };

  /* Calculate what the default width should be if user does not enter a width */
  var getDefaultWidth = function(_data) {
    var keyCount = Object.keys(_data).length;
    x = keyCount - 3;
    var minWidth = x * 50 + 600;
    return minWidth;
  };

  /* Initialize the dimensions and title of the chart depending on user parameters */
  var containerHeight = options.height ? options.height : 300;
  var containerWidth = options.width ? handleUserWidth(data, options) : getDefaultWidth(data);
  var title = options.title ? options.title : '';

  /* Create a main container to hold graph */
  var mainContainer = document.createElement("div");
  mainContainer.className = "graphite-container";
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
  graphTitle.className = "graphite-title";
  $(graphTitle).css({
    "font-family": "arial",
    "text-align": "center",
    "font-weight": "400",
    "color": "#4c4a4c",
    "width": containerWidth + 'px',
    "font-size": "12px"
  });

  /* Add container to user-selected HTML element */
  $(element).append(graphTitle);
  $(element).append(mainContainer);

  /* Populate columns and x-axis labels */
  var addColumns = function(_data, height, width) {
    var values = Object.values(_data);

    /* Find the highest value for use in scaling the height */
    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }

    var columnContainer = document.createElement("div");
    columnContainer.className = "graphite-column-container";
    $(columnContainer).css({
      "display": "flex",
      "flex-direction": "row",
      "align-items": "flex-end",
      "position": "relative",
      "padding-top": "8px",
      "padding-bottom": "8px",
      "margin-left": "40px"
    });

    /* Iterate over user's data values to get heights. Scale is dependent on dimensions of container. */
    for (i = 0; i < values.length; i++) {
      var column = document.createElement("div");
      column.innerHTML = '<p>' + values[i];
      column.className = "graphite-column";
      $(column).css({
        "margin-right": (width / values.length) / 6 + "px",
        "width": width / values.length + "px",
        "background": "linear-gradient(rgb(144, 164, 237), rgb(122, 139, 204))",
        "text-align": "center",
        "height": values[i] * (height / maxHeight) - 1 + "px",
        "z-index": "1",
        "color": "#383434",
        "font-size": "13px"
      });
      var columnLabel = document.createElement("div");
      columnLabel.innerHTML = Object.keys(_data)[i];
      columnLabel.className = "graphite-column-label";
      $(columnLabel).css({
        "margin-top": values[i] * (height / maxHeight) - 10 + "px"
      });
      $(mainContainer).append(columnContainer);
      $(columnContainer).append(column);
      $(column).append(columnLabel);
    }
  };

  /* Populate y-axis markers based on container height */
  var addSeparators = function(_data, height) {
    var values = Object.values(_data);
    var maxHeight = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] > maxHeight) {
        maxHeight = values[i];
      }
    }

    for (i = 0; i <= maxHeight; i += Math.round(maxHeight / 4)) {
      var separatorContainer = document.createElement("div");
      separatorContainer.innerHTML = i;
      separatorContainer.className = "graphite-separator-container";
      $(separatorContainer).css({
        "position": "absolute",
        "margin-bottom": i * (height / maxHeight) + "px",
        "bottom": "0",
        "width": "100%",
        "font-size": "13px"
      });
      var separator = document.createElement("hr");
      separator.className = "graphite-separator-" + i;
      $(separator).css({
        "border-bottom": "2px"
      });
      $(separatorContainer).append(separator);
      $(mainContainer).append(separatorContainer);
    }
    $(".graphite-separator-0").css({
      "border-style": "solid",
      "border-top": "1px",
      "border-color": "#727272"
    });
  };

  /* Add columns and horizontal markers to container */
  addColumns(data, containerHeight, containerWidth);
  addSeparators(data, containerHeight);

}
