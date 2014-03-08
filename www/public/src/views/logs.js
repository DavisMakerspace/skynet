define([
  'text!templates/logs.html',
  'channel'
], 

function(
    LogsTpl,
    channel
)
{
    var v = Backbone.View.extend(
    {
        className: 'logs',
        
        initialize: function()
        {
        },
        
        events: 
        {
           
        },
        
        render: function() 
        {    
            this.$el.html(_.template(LogsTpl, {})); 
            return this.$el;
        }
    });
    
    return v;
});



