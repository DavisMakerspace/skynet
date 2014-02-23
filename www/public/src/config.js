require.config(
{
  deps: ["main"],

  paths: {
    //libs: "libs"
  },

  shim: {
    "libs/backbone": {
        deps: [
        	"libs/underscore", 
        	"libs/jquery"
    	],
        exports: "Backbone"
    },
    "libs/underscore": {
        exports: "_"
    },
    "libs/jquery": {
        exports: "$"
    },
    
    "libs/jquery.cookie": ["libs/jquery"],
    "libs/jquery.bootstrap-growl": ["libs/jquery"],
    
    "main": [
    	"libs/backbone", 
    	"libs/jquery.cookie",
    	"libs/jquery.bootstrap-growl"
    	]
  }

});
