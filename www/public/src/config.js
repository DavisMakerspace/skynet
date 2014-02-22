require.config(
{
  deps: ["main"],

  paths: {
    //libs: "libs"
  },

  shim: {
    "libs/backbone": {
        deps: ["libs/underscore", "libs/jquery"],
        exports: "Backbone"
    },
    "libs/underscore": {
        exports: "_"
    },
    "libs/jquery": {
        exports: "$"
    },
    "libs/jquery.bootstrap-growl": ["libs/jquery"],
    "libs/bootstrap.min": ["libs/jquery"],
    "main": ["libs/backbone", "libs/bootstrap.min", "libs/jquery.bootstrap-growl"],    
  }

});
