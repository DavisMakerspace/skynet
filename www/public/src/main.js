require(
    [
        'app',  
        'router',
        'views/main'
    ],
    
    function(app, Router, MainView) 
    {
        this.router = new Router();
        
        Backbone.View.prototype.close = function(){
            this.remove();
            this.unbind();
            if (this.onClose){
                this.onClose();
            }
        }
        
        Backbone.history.start();
    }
);
