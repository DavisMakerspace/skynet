define([
  'text!templates/doors.html',
  'channel'
], 

function(
    DoorsTpl,
    channel
)
{
    var v = Backbone.View.extend(
    {
        className: 'doors',
        
        initialize: function()
        {
        },
        
        events: 
        {
            
        },
        
        render: function() 
        {    
            this.$el.html(_.template(DoorsTpl, {})); 
            return this.$el;
        }
    });
    
    return v;
});



