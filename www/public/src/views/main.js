define([
  'channel',       
  'text!templates/master.html'
], 

function(
         channel,
         MasterTpl
         )
{
  
    var mainHomeView = Backbone.View.extend(
    {
        initialize: function()
        {
            that = this;

            _.extend(window, Backbone.Events);

/*            
            settings.bind('all', function(e) {
                if (_.indexOf(['sync', 'destroy', 'add', 'change'], e) != -1) {
                    
                }
            },this);  
           
            settings.fetch();
  */           
            
            channel.on('alert', function(msg) {
                bootbox.alert(msg);
            });
            
            channel.on('prompt', function(msg, callback) {
                bootbox.prompt(msg, callback);
            });
            
            channel.on('confirm', function(msg, callback) {
                bootbox.confirm(msg, callback);
            });
            
            channel.on('notice_msg', function(msg) {
                $.bootstrapGrowl(msg, {type: 'info'});
            });
            
            channel.on('error_msg', function(msg) {
                $.bootstrapGrowl(msg, {type: 'error'});
            });
            
            channel.on('error_info', function(msg) {
                $.bootstrapGrowl(msg, {type: 'info'});
            });
            
        },
        
        events: {
        },
        
        render: function() 
        {
            this.$el.empty();
            this.$el.append(_.template(MasterTpl, {}));
//            this.$el.append(this.paperView.render());
//            this.$el.append(this.designToolsView.render());
            return this.$el;
        }
    });
    
    return mainHomeView;

});


