# graphite
A tiny, minimalist javascript library for generating simple bar graphs.\
<sub>(Lighthouse Labs 2018 Prep Stretch Project)</sub>

![alt text](https://cdn.rawgit.com/jonathandannel/graphite/5b05a540/graphite.png)

## Getting Started
Simply add [graphite.js](https://github.com/jonathandannel/graphite/blob/master/graphite.js) to your source directory and include it as a script in your index.html file.

## API
To create a graph, call `graphite(data, options, element)` in a .js file.

`graphite` takes 3 parameters: `data`, `options`, and `element`.

`data` should be passed an object with keys representing x-axis labels and values representing the numerical values of the corresponding bar. For example, `{'baseball': 40, 'football': 48, 'soccer': 39}`.

`options` is an optional parameter. Like data, it should be an object. Use `0` for default settings. The available options include:

- `width`: The width of the graph container. Note that if you pass in a value that causes the columns to render improperly (as in the case of too many columns for too small of a width), the width will be automatically adjusted to make the bars fit properly.

- `height`: Similar to width, but will not be automatically adjusted.

- `title`: Adds a title to the top-center of the graph.

`element`: This should be a string containing the ID of the element that the graph will be rendered to.

## Example

 `graphite({'Io': 571, 'Callisto': 490, 'Ganymede': 522}, {'height': 400, 'width': 900}, 'bargraph');`

 `graphite(dataObj, 0, 'mydiv')`

## A work in progress

The purpose of this project is primarily to learn and to become familiar with creating reusable code with javascript. As such, there are probably more than a few unexpected kinks to be worked out.
