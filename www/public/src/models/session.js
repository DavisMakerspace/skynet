define([
],
function()
{
    var sm = Backbone.Model.extend(
    {
        initialize: function()
        {
            this.set({
                'UserId': $.cookie('UserId'),
                'SessionId': $.cookie('SessionId')
            });
        },

        defaults: {
            'UserId': null,
            'SessionId': null,
        },

        save: function(auth_data)
        {
            $.cookie('UserId', auth_data.UserId);
            $.cookie('SessionId', auth_data.SessionId);
        },

        authenticated: function()
        {
            return Boolean(this.get('SessionId'));
        },
    });

    return sm;
});