define([
    'text!templates/reset_password.html',
    'channel'
], 

function(PassTpl, channel)
{
    var rp = Backbone.View.extend(
    {
        className: 'login',
        
        initialize: function()
        {            
            var that = this;
        },
        
        events: 
        {
            'click button.resetPasswordButton': 'resetPassword'
        },

        
        resetPassword: function(e)
        {
            var valid = true;
            
            if (!this.$el.find('.current_password').val()) 
            {
                valid = false;
                this.$el.find('.current_password').parent().addClass('error');
            } else {
                this.$el.find('.current_password').parent().removeClass('error');
            }
            
            if (!this.$el.find('.new_password').val()) 
            {
                valid = false;
                this.$el.find('.new_password').parent().addClass('error');
            } else {
                this.$el.find('.new_password').parent().removeClass('error');
            }
            
            if (!this.$el.find('.confirm_password').val()) 
            {
                valid = false;
                this.$el.find('.confirm_password').parent().addClass('error');
            } else {
                
                if (this.$el.find('.confirm_password').val() !=  this.$el.find('.new_password').val()) {
                    valid = false;
                    this.$el.find('.confirm_password').parent().addClass('error');
                    $.bootstrapGrowl("Passwords do not match. Please try again", {type: 'error'});
                    return;
                } else {
                    this.$el.find('.confirm_password').parent().removeClass('error');
                }
            }
            
            if (!valid) {
                $.bootstrapGrowl("Please fill out all required fields and try again.", {type: 'error'});
                return;
            }
            
            $.ajax({
              url: '/api/ResetPassword',
              data: {
                  'Password': this.$el.find('.password').val(),
                  'NewPassword': this.$el.find('.password').val(),
                  'Format': 'json'
              },
              success: function(res) {
                  if (res.error) 
                  {
                      $.bootstrapGrowl("Unable to reset the password. Please try again.", {type: 'error'});
                      $('.resetPasswordForm').effect("shake", { times:8 }, 280);
                      return;
                  } else {
                      var user = res.results[0];
                      $.cookie('Password', user['Password']);
                      $.bootstrapGrowl("Password Updated", {type: 'notice'});
                  }
              },
              dataType: 'json'
            });
            
        },
        
        render: function() 
        {    
            $('.navigation').hide();
            this.$el.html(_.template(PassTpl, {}));
            return this.el;
        }
        
    });
    
    return rp;
});
