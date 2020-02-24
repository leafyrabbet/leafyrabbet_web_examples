/*
Web Example: backbone.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `backbone.js` has been loaded


let BodyView = Backbone.View.extend({
  el: 'body'
});

let BookModelSet = Backbone.Collection.extend(
  {
    url: '/books',
    parse: function(data) { return (data.books); }
  }
);

_.extend(BookModelSet, Backbone.Events);

BookModelSet.on(
  "alert",
  function(msg) { alert("Triggered " + msg); }
);

let BookView = Backbone.View.extend({
  tagName: "div",
  className: "_book",
  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    return (this);
  }
});
