//var drawBarChart = function(data, options, element) {
//};

var sampleData = [1, 2, 3, 4, 5];
var chart = document.getElementById('graphite-chart');

var addBlock = function(times) {
  var block = '|---|';
  chart.innerHTML += block.repeat(times);
  chart.innerHTML += '<br>';
};

for (i = 0; i < sampleData.length; i++) {
  console.log(addBlock(sampleData[i]));
}
