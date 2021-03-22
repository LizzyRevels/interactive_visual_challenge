
// 1. Fetch the JSON data and console log it
// ---------------------------------
d3.json("samples.json").then((data) => {
  console.log(data);


// 2. Create a horizontal bar chart with a dropdown menu to display the 
// top 10 OTUs found in that individual. 
  // *Use sample_values as the values for the bar chart.
  // *Use otu_ids as the labels for the bar chart.
  // *Use otu_labels as the hovertext for the chart
// ---------------------------------

// Assign data to a variable 
var data = bellyData;

// Sort the array in ascending order using an arrow function
var sortedAscending = bellyData.sort((a, b) => a - b);

// Print the results to the console
console.log(sortedAscending);

// Slice the first ten elements of the sortedAscending array, assign to a variable
slicedData = sortedAscending.slice(0, 10);
// console.log(sliced);

// Horizontal Bar Chart - Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the OTU Data
var trace1 = {
  x: slicedData,
  y: reversedData,
  text: reversedData.map(object => object.otu_labels),
  name: "Top 10 OTUs",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Top 10 OTUs by Indidvidual",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

Plotly.newPlot("bar", data, layout);

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  var x = [];
  var y = [];


// 3. Create a bubble chart that displays each sample.
  // *Use otu_ids for the x values.
  // *Use sample_values for the y values.
  // *Use sample_values for the marker size.
  // *Use otu_ids for the marker colors.
  // *Use otu_labels for the text values.

  // 4. Display the sample metadata, i.e., an individual's demographic 
  // information.

  // 5. Display each key-value pair from the metadata JSON object somewhere 
  // on the page.

  // 6. Update all of the plots any time that a new sample is selected.