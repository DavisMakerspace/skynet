define([
    'views/navigation',
    'views/login',
    'models/session'
], 

function(
    NavigationView,
    LoginView,
    session
)
{
    var mainView = Backbone.View.extend(
    {
        className: 'page',
        
        initialize: function()
        {            
            this.navigation = new NavigationView();
            this.loginView = new LoginView();

            sessionError = _.debounce(this.showSessionError, 300);
            
            jQuery.ajaxSetup({
                statusCode: {
                    400: function(s) {
                        // bad request 
                        if (s.responseText.indexOf('Invalid Session') !== -1) {
                            if (_.indexOf(['login', 'logout', ''], Backbone.history.fragment) == -1)
                                sessionError();
                            
                            Backbone.history.navigate('logout', true);
                        }
                        else if (s.responseText.indexOf('Expired Session') !== -1) {
                            sessionError();
                            Backbone.history.navigate('logout', true);
                        }
                        else if (s.responseText.indexOf('Invalid Login') !== -1) {
                            $.bootstrapGrowl("Invalid Login. Please try again.", {type: 'error'});
                        }
                        else { 
                            try {
                                var j = JSON.parse(s.responseText);
                                if (j.error) {
                                    $.bootstrapGrowl(j.error, {type: 'error'});
                                } else {
                                    $.bootstrapGrowl("There was an error. Please try again.", {type: 'error'});
                                }
                            }
                            catch (err) {
                                console.info(err);
                            }
                            
                        }   
                    },
                    401: function(){
                        // Redirect the to the login page.
                        Backbone.history.navigate('login', true);          
                    }
                }
            });

            
            jQuery(document).ajaxStart(function(e) {
                $('#loader').show();
            })
            
            jQuery(document).ajaxStop(function(e) {
                $('#loader').hide();
            })  
        },
        
        showSessionError: function()
        {
            $.bootstrapGrowl("Your session is expired. Please log in again.", {type: 'info', allow_dismiss: true});
        },
        
        render: function() 
        {    
            this.$el.append(this.navigation.render());
            
            this.$el.append('<div id="page"></div><div id="loader"><img src="/images/loader.gif"/> Loading...</div>');
            
            $('body').html(this.el);
        }
    });
    
    return mainView;
});
