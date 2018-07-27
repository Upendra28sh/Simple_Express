const express = require('express')
const srv=express()

srv.get('/greet/:tod',function(req,res,next)
{
    let greetings="Good " + req.params.tod +" "+ req.query.name
    res.send(greetings)
    
})

srv.listen(2121)
