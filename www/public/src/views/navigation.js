define([
    'text!templates/navbar.html',
    'channel'
], 

function(
    NavbarTpl, 
    channel
)
{
    
    var navigationView = Backbone.View.extend(
    {
        className: 'navigation',
        
        events: {
            'click .nav li': 'onItemClick'
        },
        
        initialize: function()
        {            
            channel.on("switchPage", function(o) {
                 $('.navigation .active').removeClass('active');
                 $('.navigation .'+o.page).addClass('active');
            });
        },
        
        render: function() 
        {      
            this.$el.html(_.template(NavbarTpl, {  } ));
            return this.$el;
        },
        
        onItemClick: function(e)
        {
            //$('.navigation .active').removeClass('active');
            //$(e.currentTarget).addClass('active');
        }        
    });
    
    return navigationView;

});
