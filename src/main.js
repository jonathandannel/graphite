var sampleData = [2, 8, 4, 5, 7, 3];

var mainContainer = document.querySelector(".graphite-container");

var addColumns = function(data) {
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("div");
    column.className = "graphite-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = column.Id;
    var columnValue = '';
    columnValue += (data[i] * 25) + 'px';
    $(column).css({
      "display": "inline-block",
      "height": columnValue,
      "background-color": "blue",
      "vertical-align": "bottom"
    });
    $(mainContainer).append(column);
  }
};

addColumns(sampleData);
