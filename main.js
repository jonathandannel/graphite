var exampleData = {
  'Indian': 55,
  'Hispanic': 101,
  'Middle-Eastern': 71,
  'Asian': 80,
  'Native': 26,
  'Other': 39
};

var exampleOptions = {
  'height': 350,
  'title': 'Poll Results',
  'width': 1000,
  'fixPadding': 18,
  'barFont': [0, 12, "bold"],
  'labelFont': [0, 13, 0]
};

graphite(exampleData, exampleOptions, example1);


var exampleDataB = {
  'Io': 3660,
  'Callisto': 4820,
  'Europa': 3122,
  'Ganymede': 5268
};

var exampleOptionsB = {
  'height': 400,
  'width': 800,
  'title': 'Diameter of Jovian moons (km)',
  'barColor': "#bfb9e8",
  'fixPadding': 18
};

graphite(exampleDataB, exampleOptionsB, example2);
