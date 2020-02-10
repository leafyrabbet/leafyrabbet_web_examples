/*
Web Example: backbone.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `backbone.js` has been loaded

let Books = Backbone.Collection.extend(
  {
    url: '/books',
    parse: function(data) { return (data.books); }
  }
);

_.extend(Books, Backbone.Events);

Books.on(
  "alert",
  function(msg) { alert("Triggered " + msg); }
);
