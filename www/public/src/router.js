define([
    'views/main',
    'channel'
], 

function(
    MainView, 
    channel)
{
    var AppRouter = Backbone.Router.extend(
    {
        routes: 
        {
            '/': 'showMainView',
            '*actions': 'showMainView',
        },
        
        showMainView: function(actions)
        {
            if (!this.mainView)
                this.mainView = new MainView();
            
            $('body').html(this.mainView.render());
        },
                
    });
        
    return AppRouter;
});

