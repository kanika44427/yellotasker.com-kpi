var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

// START THE SERVER
// ==============================================
var server = app.listen(8081, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Analytics node app listening at http://%s:%s", host, port)
});