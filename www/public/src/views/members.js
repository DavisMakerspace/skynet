define([
  'text!templates/members.html',
  'models/session',
  'collections/members',
  'channel'
], 

function(
    MembersTpl,
    session,
    members,
    channel
)
{
    var v = Backbone.View.extend(
    {
        className: 'members',
        
        initialize: function()
        {
        	var that = this;
        	
            members.bind('all', function(e) {
                if (_.indexOf(['sync', 'destroy', 'add'], e) != -1) {
                        that.render();
                }
            },this);
          	members.fetch();  
        },
        
        events: 
        {
			
        },
        
        render: function() 
        {    
            this.$el.html(_.template(MembersTpl, {members:members})); 
            return this.$el;
        }
    });
    
    return v;
});



