/*
Web Example: react.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `react.js` and `reactDOM.js` have been loaded

let page_load = function hst_page_load() {
   let name = "gurl";
   let main_elm = React.createElement(
      "h1",
      null,
      "Sup, " + name + "!"
   );
   ReactDOM.render(
     main_elm,
     document.getElementById("main_page")
   );
   return
}

window.onload = page_load
