define([
], 
function()
{
    var sm = Backbone.Model.extend(
    {
        url: '/session',
        
        initialize: function()
        {
        },
        
        defaults: 
        {
            id: null,
            key: null
        },
        
        authenticated: function()
        {
            return Boolean(this.get('id') != null);
        },
    });
    
    return new sm();	   
});



