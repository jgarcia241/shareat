(function(window, undefined) {
  var dictionary = {
    "0aaa1340-6493-4fdc-b685-4a66253708b0": "Mis tiendas donar",
    "001a7bca-2a59-46fa-962b-e2ef03ea2e4f": "Hub Quiero donar",
    "f69ab636-e7c9-4f1d-bb82-2904590c4261": "descarga (1)",
    "067f0512-860b-4cd2-82d0-fd134cb1a9d4": "Sign up",
    "7024a4b2-5bf3-4f06-9411-fb3a47cc970c": "Sign in2",
    "54f0aa16-5651-40a0-a867-15912d73b0f3": "Vendedor",
    "73b23d67-d46f-4ab8-bf96-ca4252cbe3dd": "Maps",
    "ea0d2ec4-7066-427c-b19d-cb6b413eb64c": "Hub Quiero recibir",
    "2c877ee9-bd18-4cff-8dd9-3806fbca392a": "Nueva tienda donar",
    "09023ee2-9c9d-44f7-b864-ca3016d0d46d": "Mis recepciones",
    "484ece5c-8877-49a5-a443-79a82e871b4a": "chat",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);