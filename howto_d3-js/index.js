/*
Web Example: d3.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `d3.js` v5.x has been loaded

let axis_min = 0;
let axis_max = 1000;

let data_linscale = null;
let data_axis_bot = null;

let chart_margin = {
  "top": 30,
  "right": 15,
  "bottom": 30,
  "left": 15
};

let attribute_update = function hst_attribute_update(select_str, html_str)
{
  d3.select(select_str).html(html_str);
  return (null);
}


let generate_xaxis = function hst_generate_xaxis(container_id)
{
  let svg_content_width = 640;
  let svg_width = svg_content_width + 40;
  let svg_height = 30;

  let chart_width = parseInt(
    d3.select("#" + container_id).style('width'),
    10
  )

  let axis_width = (chart_width - chart_margin.left - chart_margin.right);

  data_linscale = d3.scaleLinear()
                    .range([0, axis_width])
                    .domain([axis_min, axis_max]);

  data_axis_bot = d3.axisBottom(data_linscale)
                    .tickPadding(10);

  d3.select("#" + container_id)
    .append("svg")
      .attr("viewbox", "0 0 720 40")  // min-x, min-y, width, height
      .attr("width", "100%")
      .attr("height", "5vw")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("version", "1.1")
      .attr("id", "example_axis")
      .attr("class", "svg_chart")
    .append("g")
      .attr("transform", "translate(5,10)")
      .attr("id", "axis_bot")
      .call(data_axis_bot);
  
  attribute_update("#chart_width", (chart_width + "px"));
  attribute_update("#axis_width", (axis_width + "px"));

  return (null);
}

function resize_xaxis()
{
  let chart_width = parseInt(
    d3.select('#ex_axis_container').style('width'),
    10
  );

  let axis_width = (chart_width - chart_margin.left - chart_margin.right);

  data_linscale.range([0, axis_width]);

  d3.select("#axis_bot")
    .call(data_axis_bot);

  attribute_update("#chart_width", (chart_width + "px"));
  attribute_update("#axis_width", (axis_width + "px"));

  return (null);
}

generate_xaxis("ex_axis_container");

let resize = function hst_resize()
{
  resize_xaxis();
  return (null);
}

d3.select(window).on('resize', resize); 
