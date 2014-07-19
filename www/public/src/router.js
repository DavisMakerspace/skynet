define([
    'views/main',
    'views/login',
    'views/tools',
    'views/logs',
    'views/members',
    'views/doors',
    'views/navigation',
    'views/reset_password',   
    'models/session',
    'channel'
], 

function(
    MainView, 
    LoginView,
    ToolsView,
    LogsView,
    MembersView,
    DoorsView,
    NavigationView,
    ResetPasswordView,
    session,
    channel
)
{
    var AppRouter = Backbone.Router.extend(
    {
        initialize: function()
        {
            this.mainView = new MainView();
            this.mainView.render();
            //session.fetch();
        },
        
        routes: 
        {
            '/': 'defaultAction',
            'login': 'showLoginView',
            'tools': 'showToolsView',
            'logs': 'showLogsView',
            'members': 'showMembersView',
            'doors': 'showDoorsView',
            'logout': 'logOut',
            '*actions': 'defaultAction',
        },
        
        checkAuth: function()
        {
            if (!session.authenticated())
                Backbone.history.navigate('/', true)
        },
        
        
        defaultAction: function()
        {
        	this.showMembersView();
        },
        
        showMainView: function(actions)
        {
            if (!this.mainView)
                this.mainView = new MainView();
            
            $('body').html(this.mainView.render());
        },
        
        showToolsView: function(actions)
        {
            if (!this.toolsView)
                this.toolsView = new ToolsView();
            
            $('#page').html(this.toolsView.render());
            channel.trigger('switchPage', {'page': 'tools'});
        },
        
        showDoorsView: function(actions)
        {
            if (!this.doorsView)
                this.doorsView = new DoorsView();
            
            $('#page').html(this.doorsView.render());
            channel.trigger('switchPage', {'page': 'doors'});
        },
        
        showMembersView: function(actions)
        {
            if (!this.membersView)
                this.membersView = new MembersView();
            
            $('#page').html(this.membersView.render());
            channel.trigger('switchPage', {'page': 'members'});
        },        
        
        showLogsView: function(actions)
        {
            if (!this.logsView)
                this.logsView = new LogsView();
            
            $('#page').html(this.logsView.render());
            channel.trigger('switchPage', {'page': 'logs'});
        },        
        
        showLoginView: function()
        {
            channel.trigger('logout', {});
			this.loginView = new LoginView();
            $('#page').html(this.loginView.render());
        },

        logOut: function()
        {
            $.ajax({url: '/logout'});
            this.showLoginView();
        },
                
    });
        
    return AppRouter;
});

