define([
  'text!templates/tools.html',
  'channel'
], 

function(
    ToolsTpl,
    channel
)
{
    var v = Backbone.View.extend(
    {
        className: 'dashboard',
        
        initialize: function()
        {
        },
        
        events: 
        {
            
        },
        
        render: function() 
        {    
            
            this.$el.html(_.template(ToolsTpl, {})); 
            return this.$el;
        }
    });
    
    return v;
});



