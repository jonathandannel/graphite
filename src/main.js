var sampleData = [2, 8, 4, 5, 7, 3];

var mainContainer = document.querySelector(".graphite-container");
$(mainContainer).css("padding-left", "50px");

/*var columnColors = ['red', 'green', 'orange', 'yellow', 'blue', 'green'];*/

var addColumns = function(data) {
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("div");
    column.className = "graphite-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = '<br>' + data[i];

    var columnValue = '';
    columnValue += (data[i] * 25) + 'px';
    $(column).css({
      "display": "inline-block",
      "height": columnValue,
      "background-color": "#4d88ff",
      "vertical-align": "bottom",
      "margin-right": "15px",
      "width": "50px",
      "text-align": "center",
      "font-family": "arial",
      "text-padding": "5px",
      "font-size": "12px"
    });
    $(mainContainer).append(column);
  }
};

addColumns(sampleData);
