define([
    'views/main',
    'views/login',
    'views/reset_password',
    'models/session',    
    'channel'
], 

function(
    MainView, 
    LoginView,
    ResetPasswordView,
    Session,
    channel
)
{
    var AppRouter = Backbone.Router.extend(
    {
        routes: 
        {
            '/': 'defaultAction',
            'login': 'showLoginView',
            'logout': 'logOut',
            '*actions': 'defaultAction',
        },
        
        defaultAction: function()
        {
        	this.showMainView();
        },
        
        showMainView: function(actions)
        {
            if (!this.mainView)
                this.mainView = new MainView();
            
            $('body').html(this.mainView.render());
        },
        
        showLoginView: function()
        {
            channel.trigger('logout', {});
			this.loginView = new LoginView();
            $('#page').html(this.loginView.render());
        },

        logOut: function()
        {
            $.cookie('SessionId', '');
            $.cookie('Email', '');
            $.cookie('Password', '');

            window.location = '/#login';
        },
                
    });
        
    return AppRouter;
});

