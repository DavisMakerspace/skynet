define([
    'libs/underscore',
    'libs/backbone'
], 

function (_, Backbone) {
    var channel = _.extend({}, Backbone.Events); 
    return channel;
});

