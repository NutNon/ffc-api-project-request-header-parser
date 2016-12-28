var express =   require(`express`)
var app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080

app.get('/', function(req, res) {
    // Show request header in console log.
    console.log(req.headers)
    
    // Set output.
    var outp =  {
        ipAddress: req.ip, 
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
    
    // Send JSON output.
    res.send(JSON.stringify(outp))
})

app.listen(port, function() {
    console.log('App listen on port: ' + port)
})