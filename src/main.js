var sampleData = [1, 2, 3, 4, 5];

var chart = document.querySelector(".graphite-chart");

var table = document.createElement("table");
table.className = "graphite-skeleton";
chart.append(table);

var addColumns = function(data) {
  var row = document.createElement("tr");
  table.append(row);
  for (i = 0; i < data.length; i++) {
    var column = document.createElement("td");
    column.className = "individual-column";
    column.Id = 'column-' + (i + 1);
    column.innerHTML = column.Id;
    row.append(column);

  }
};

addColumns(sampleData);
