# graphite
A tiny, minimalist javascript library for generating simple bar graphs.\
<sub>(Lighthouse Labs 2018 Prep Stretch Project)</sub>

## Getting Started
Simply add [graphite.js](https://github.com/jonathandannel/graphite/blob/master/graphite.js) to your source directory and include it as a script in your index.html file. You'll also need [jQuery](https://github.com/jquery/jquery).

## API
To create a graph, call `graphite(data, options, element)`.

`graphite` takes 3 parameters: `data`, `options`, and `element`.

`data` should be passed an object with keys representing x-axis labels and values representing the numerical values of the corresponding bar. For example, `{'baseball': 40, 'football': 48, 'soccer': 39}`.

`options` is an optional parameter. Like data, it should be an object. Use `0` for default settings. The available options include:

- `width`: The width of the graph container. Note that if you pass in a value that causes the columns to render improperly (as in the case of too many columns for too small of a width), the width will be automatically adjusted to make the bars fit properly.

- `height`: Sets the height of the graph container.

- `title`: Adds a title to the top-center of the graph.

- `color`: Changes the bar color. Use a string with a Hex or RGB value. Linear gradients can be used, too. Ex: `{'color': '#884dff'}` `{'color': "linear-gradient(rgb(144, 164, 237), rgb(122, 139, 204))"}`

- `labelFont`: Styles the x-axis labels. Takes an array `['fontcolor', 'fontsize']`. Font color is a string with a Hex/RGB value and font size is a number.
]

`element`: The <b>ID</b> of the element that the graph will be rendered to. Should *not* be a string.

## Example Usage

 `graphite({'One': 1, 'Two': 2, 'Three': 3, 'Four': 4}, {'height': 400, 'width': 1200, "title": "Simple Graph"}, myDivId)`

 `graphite(dataObject, 0, otherDivId)`

 `graphite({'Baseball': 33, 'Football': 29}, {'color': 'rgb(130, 187, 237)'}, bestDivId)`

## A work in progress

The purpose of this project is primarily to learn and to become familiar with creating reusable code with javascript. As such, there are probably more than a few unexpected kinks to be worked out.

## To do:

- Make font sizes customizable.
- Allow stacked bars.
- Improve accuracy of automatic width sizing.
