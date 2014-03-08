define([
], 
function()
{
    var sm = Backbone.Collection.extend(
    {
        url: '/members',

        parse: function(response) 
		{
				return response.rows;
		},
		
    });
    
    
    
    return new sm();	   
});



