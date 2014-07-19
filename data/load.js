var fs = require('fs')
  , http = require('http')
  , nano = require('../www/node_modules/nano')('http://localhost:5984')
    
  
var po = {
    'host':'localhost', 
    'port': '5984', 
    'method': 'POST', 
    'headers': {
        'Content-Type': 'application/json'
    } 
}

fs.readdir('.', function(err, files) {
    if (err) {
        throw err;
    } else {
        files.forEach(function(f) {
            if (f.split(".")[1] == 'json') {
                dropAndCreateDb(f.split(".")[0]);
            }
        });
    }
});

var dropAndCreateDb = function(db)
{
    var req = http.request({'path':'/'+db, 'host':po.host, 'port': po.port, 'method': 'DELETE'}, function(res) {
        res.on('data', function (chunk) {
             console.log('Response: ' + chunk);
             var req = http.request({'path':'/'+db, 'host':po.host, 'port': po.port, 'method': 'PUT'}, function(res) {
                res.on('data', function (chunk) {
                     console.log('Response: ' + chunk);
                     loadData(db);
                });
             });
             req.end();
        });
    });   
    req.end();
}

var loadData = function(file) {
    fs.readFile(file+'.json', 'utf8', function (err, data) {
        if (err) {
            throw err; 
        } else {
            data = JSON.parse(data);
            for(var i=0;i<data.length; i++) {
                po.path = '/'+file+'/'; 
                var sd = JSON.stringify(data[i]);
                po.headers["Content-Length"] =  Buffer.byteLength(sd)
                var req = http.request(po, function(res) {
                    res.setEncoding('utf8');
                    res.on('data', function (chunk) {
                        console.log('Response: ' + chunk);
                    });
                });
                req.write(sd);
                req.end();
            };
        }
    });
}
