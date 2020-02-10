/*
Web Example: mustache.js

Tommy Vegetables
"LeafyRabbet"
Copyright (c) TenonGarden Productions, 2020
*/

// Assumes `mustache.js` has been loaded

let generate_example_body = function hst_generate_example_body(
  model,
  view,
  example_id,
  container_tag
)
{
  let success = false;
  let doc_frag = new DocumentFragment();
  let example_elm = document.getElementById(example_id);
  let container_elm = document.createElement(container_tag);

  container_elm.innerHTML = Mustache.render(model, view);
  
  doc_frag.appendChild(container_elm);

  example_elm.appendChild(doc_frag);

  success = true;

  return (success);
}


// Example: Simple String
// -----------------------------------------------------------------------------
let model = "{{title}} am over {{calc}} years old.";

let view = {
  "title": "I",
  "calc": function () { return (3000); }
};

generate_example_body(model, view, "ex_simple_str", "p");
// -----------------------------------------------------------------------------


// Example: Table
// -----------------------------------------------------------------------------
let table_model = String.raw`
<table>
  <tbody>
    {{#headers}}
    <tr>
      <th>{{col_a}}</th>
      <th>{{col_b}}</th>
      <th>{{col_c}}</th>
    </tr>
    {{/headers}}
    {{#rows}}
    <tr>
      <td>{{col_a}}</td>
      <td>{{col_b}}</td>
      <td>{{col_c}}</td>
    </tr>
    {{/rows}}
  </tbody>
</table>
`;

let table_view = {
  "headers": [
    {
      "col_a": "HTTP Code",
      "col_b": "Name",
      "col_c": "Description"
    }
  ],
  "rows": [
    { "col_a": "400", "col_b": "Bad Request",                     "col_c": "Sounds like a personal problem." },
    { "col_a": "401", "col_b": "Unauthorized",                    "col_c": "You're not on the list." },
    { "col_a": "402", "col_b": "Payment Required",                "col_c": "If you wanna continue, I'm gonna need some collateral." },
    { "col_a": "403", "col_b": "Forbidden",                       "col_c": "You don't have the proper clearance." },
    { "col_a": "404", "col_b": "Not Found",                       "col_c": "I don't know what you expected to find." },
    { "col_a": "405", "col_b": "Method Not Allowed",              "col_c": "Please don't do that." },
    { "col_a": "406", "col_b": "Not Acceptable",                  "col_c": "What we have here is a failure to communicate." },
    { "col_a": "407", "col_b": "Proxy Authentication Required",   "col_c": "You're gonna have to go through me." },
    { "col_a": "408", "col_b": "Request Timeout",                 "col_c": "You didn't even care enough to respond?" },
    { "col_a": "409", "col_b": "Conflict",                        "col_c": "What is it exactly that you want?" },
    { "col_a": "410", "col_b": "GoneNew",                         "col_c": "New phone, who's this?" },
    { "col_a": "411", "col_b": "Length Required",                 "col_c": "What? You think I'd just give you <i>everything</i>?" },
    { "col_a": "412", "col_b": "Precondition Failed",             "col_c": "I'm sorry I'm not up to your standards." },
    { "col_a": "413", "col_b": "Payload Too Large",               "col_c": "What do you think this is, a bank?" },
    { "col_a": "414", "col_b": "URI Too Long",                    "col_c": "I'm not reading all that, just tell me where you're going with this." },
    { "col_a": "415", "col_b": "Unsupported Media Type",          "col_c": "Ooo, ouch, I did not like that." },
    { "col_a": "416", "col_b": "Range Not Satisfiable",           "col_c": "Yes you were quite specific, but no, that's not happening." },
    { "col_a": "417", "col_b": "Expectation Failed",              "col_c": "I know, I know, I'm a disappointment." },
    { "col_a": "418", "col_b": "I'm A Teapot",                    "col_c": "Nerds." },
    { "col_a": "419", "col_b": "Authentication Timeout",          "col_c": "This is embarrassing, but we're having trouble finding your file." },
    { "col_a": "420", "col_b": "---",                             "col_c": "Site had the munchies; can't find your cookies." },
    { "col_a": "421", "col_b": "Misdirected Request",             "col_c": "Not my department." },
    { "col_a": "422", "col_b": "Unprocessable Entity",            "col_c": "I don't quite know what you're trying to say?" },
    { "col_a": "423", "col_b": "LockedSomeone",                   "col_c": "Someone's in here!" },
    { "col_a": "424", "col_b": "Failed Dependency",               "col_c": "I was supposed to go next, but that's not happening." },
    { "col_a": "425", "col_b": "Too Early",                       "col_c": "I'm not making multiple trips." },
    { "col_a": "426", "col_b": "Upgrade Required",                "col_c": "I'm sorry but we have a dress-code." },
    { "col_a": "428", "col_b": "Precondition Required",           "col_c": "You need to be more specific." },
    { "col_a": "429", "col_b": "Too Many Requests",               "col_c": "One at a time! One at a time!" },
    { "col_a": "431", "col_b": "Request Header Fields Too Large", "col_c": "I don't need all this extra stuff, just get to the point." },
    { "col_a": "451", "col_b": "Unavailable for Legal Reasons",   "col_c": "I thought this was America!?" }
  ]
}

generate_example_body(table_model, table_view, "ex_simple_table", "div");
// -----------------------------------------------------------------------------
