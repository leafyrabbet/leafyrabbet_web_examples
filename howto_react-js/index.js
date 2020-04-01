/*
Web Example: react.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `react.js` and `reactDOM.js` have been loaded

// let count_value = 10

let ButtonObj = function hst_ButtonObj(props) {
   return React.createElement(
      "button",
      {"onClick": props.onClick},
      props.name
   )
}

let increment_fnc = function hst_increment_fnc(count_value) {
   count_value = count_value + 1;
   console.log(count_value)
   return (count_value);
}


let get_counter_div = function hst_get_counter_div(props) {
   const [count_value, update_count] = React.useState(0);
   let p_elm = React.createElement(
      "p",
      null,
      `Button Clicked: ${count_value} time(s)`,
   );
   let button_elm = ButtonObj(
      {
         "onClick": function () { return update_count(increment_fnc(count_value)); },
         "name": "Increment",
      },
   );
   let counter_container_elm = React.createElement(
      "div",
      null,
      [
         p_elm,
         button_elm,
      ],
   );
   return counter_container_elm;
}


let page_load = function hst_page_load() {
   let name = "gurl";
   let main_elm = React.createElement(
      get_counter_div,
      null,
   );
   ReactDOM.render(
      main_elm,
      document.getElementById("main_page")
   );
   return;
}

window.onload = page_load
