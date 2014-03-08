define([
    'text!templates/login.html',
    'channel'
], 

function(
	LoginTpl, 
	channel)
{
    var lv = Backbone.View.extend(
    {
        
        initialize: function()
        {
            
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
              url: '/login',
              data: {
                  'email': this.$el.find('.email').val(),
                  'password': this.$el.find('.password').val()
              },
              success: function(res) {
                  if (res.error) 
                  {
                      $.bootstrapGrowl("Incorrect email or password. Please try again.", {type: 'error'});
                      $('.loginForm').effect("shake", { times:8 }, 280);
                      return;
                  } else {
                      Backbone.history.navigate('members', true)
                      $('.navigation').show();
                  }
              },
              dataType: 'json'
            });
            
        },
        
        render: function() 
        {    
            $('.navigation').hide();
            this.$el.html(_.template(LoginTpl, {'a':'123'}));
            return this.el;
        }
        
    });
    
    return lv;
});
