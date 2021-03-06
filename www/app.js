var express = require('express')
  , app = express()
  , http = require('http')  
  , server = http.createServer(app)
  , path = require('path')  
  , nano = require('nano')('http://localhost:5984')  
  , db = nano.db.use('skynet')
  , members = nano.db.use('members')

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('sKyN3t'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

function restrict(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.send('{error: "access denied"}');
    }
}

// routes
app.get('/', function(req, res){
   res.render('index', { title: 'skynet' });
});

app.get('/login', function(req, res) {
   if (req.query.email) {
       members.view('byemail', 'byemail', { key: req.query.email}, function(err, body) {
            //res.setHeader('Content-Type', 'text/plain');
            if (!err) {
                if (body.rows.length > 0) {
                    var u = body.rows[0];
                    // todo: update this so that it hashes the password
                    // before it compares it to the db value
                    if (u.value.password == req.query.password) 
                    {
                        req.session.regenerate(function(){
                            req.session.user = u;
                            res.send(u);
                        });                        
                    } else {
                        res.send('{error: "invalid password"}');
                    }
                } else {
                    res.send('{error: "invalid user"}');
                }
            }
            else
                res.send(err);
       });    
    
   }
});

app.get('/logout', function(req, res) {
    req.session.destroy(function(){
            res.send('ok');
    });
});

app.get('/members', function(req, res) {
    members.view('members', 'byemail', function(err, body) {
            if (err) {
                res.send(JSON.stringify({error: err}));
            }
            else
                res.send(body);
    });
});

app.get('/session', function(req, res) {
    if (req.session.user) {
        res.send(req.session.user);   
    } else {
        res.send('{error: "Invalid Session"}', 400);
    }

});


// Data API routes

// Add a new member.
app.post('/api/member/', function(req, res) {

   members.insert(req.body, function(err, body) {
      if (err) {
         console.log(err.message);
         res.send(500, {'error': err.message});
      } else {
         res.write(JSON.stringify(body));
         res.end();
      }
   }); 

});

// Retrive data for specified member.
app.get('/api/member/:id/', function(req, res) {

   members.get(req.params.id, function(err, body) {
      if (err) {
         console.log(err.message);
         res.send(500, {'error': err.message});
      } else {
         res.write(JSON.stringify(body));
         res.end();
      }
   });

});


// Update existing member data.
app.put('/api/member/:id/', function(req, res) {

   members.get(req.params.id, function(err, member) {
      if (err) {
         console.log(err.message);
         res.send(500, {'error': err.message});
      } else {
         req.body._rev = member._rev;
         members.insert(req.body, req.params.id, function(err, body) {
            if (err) {
               console.log(err.message);
            } else {
               res.write(JSON.stringify(body));
               res.end();
            }
         });
      }
   });

});



server.listen(app.get('port'), function(){
  console.log('skynet server listening on port ' + app.get('port'));
});
