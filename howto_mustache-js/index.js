/*
Web Example: mustache.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `mustache.js` has been loaded

let model = "{{title}} spends {{calc}}";
let view = {
  title: "Joe",
  calc: function () { return (2 + 4); }
};

let output = Mustache.render(model, view);

let doc_frag = new DocumentFragment();
let p_tag = document.createElement("p");
p_tag.innerHTML = output;
doc_frag.appendChild(p_tag);

body_tag = document.getElementsByTagName("body")[0];
body_tag.appendChild(doc_frag);
