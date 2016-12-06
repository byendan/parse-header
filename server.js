var express = require('express')
var app = express()

app.get('/', function (req, res) {
    console.log(req.headers)
    var ip = req.headers['x-forwarded-for']
    var language = req.headers['accept-language']
    language = language.split(";")[0].split(",")[0]
    var software = req.headers['user-agent']
    software = software.split("(")[1].split(")")[0]
    var returnInfo = {
        'ip': ip,
        'language': language,
        'software': software
    }
  res.send(JSON.stringify(returnInfo))
})

app.listen((process.env.PORT || 8080), function() {
    console.log("listening in to you")
})
