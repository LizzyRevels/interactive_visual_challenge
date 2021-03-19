
// 1. Fetch the JSON data and console log it
d3.json("samples.json").then((bellyData) => {
  console.log(bellyData);
  var data = bellyData;

});

// 2. Create a horizontal bar chart with a dropdown menu to display the 
// top 10 OTUs found in that individual. (see Day 3 Breakout#1)
  // *Use sample_values as the values for the bar chart.
  // *Use otu_ids as the labels for the bar chart.
  // *Use otu_labels as the hovertext for the chart
  // var data = bellyData
  // var bellyIds = data.names;
  // for (var i = 0; i < bellyIds.length; i++) {
  //   selectBox = d3.select(""); 
  //   console.log("bellyId",)
  // }
  
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