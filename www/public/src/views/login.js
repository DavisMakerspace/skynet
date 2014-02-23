define([
    'text!templates/login.html',
    'channel'
], 

function(LoginTpl, channel)
{
    var lv = Backbone.View.extend(
    {
        className: 'login',
        
        initialize: function()
        {            
            var that = this;
        },
        
        events: 
        {
            'click button.loginButton': 'login',
            'keypress .password': function(e) {
                if (e.charCode == 13)
                    this.login(e);
            }
        },

        
        login: function(e)
        {
            var valid = true;
            
            if (!this.$el.find('.email').val()) 
            {
                valid = false;
                this.$el.find('.email').parent().addClass('error');
            } else {
                this.$el.find('.email').parent().removeClass('error');
            }
            
            if (!this.$el.find('.password').val()) 
            {
                valid = false;
                this.$el.find('.password').parent().addClass('error');
            } else {
                this.$el.find('.password').parent().removeClass('error');
            }
            
            if (!valid) {
                $.bootstrapGrowl("Please enter valid email and password and try again", {type: 'error'});
                return;
            }
            
            $.ajax({
              url: '/api/Login',
              data: {
                  'Email': this.$el.find('.email').val(),
                  'Password': this.$el.find('.password').val(),
                  'Format': 'json'
              },
              success: function(res) {
                  if (res.error) 
                  {
                      $.bootstrapGrowl("Incorrect email or password. Please try again.", {type: 'error'});
                      $('.loginForm').effect("shake", { times:8 }, 280);
                      return;
                  } else {
                      var user = res.results[0];
                      $.cookie('SessionId', user['SessionId']);
                      $.cookie('Email', user['Email']);
                      $.cookie('Password', user['Password']);
                      
                      window.location = '/';
                  }
              },
              dataType: 'json'
            });
            
        },
        
        render: function() 
        {    
            this.$el.html(_.template(LoginTpl, {}));
            return this.el;
        }
        
    });
    
    return lv;
});
