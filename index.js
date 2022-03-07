const express = require('express');
const app = express();

app.use(logger)

app.get("/books",(req,res) => {
    return res.send({route:req.path})
})

app.get("/libraries",checkPermission,(req,res) => {
    return res.send({route:req.path,permission:req.stat})
})

app.get("/authors",checkPermission,(req,res) => {
    return res.send({route:req.path,permission:req.stat})
})
 
function checkPermission(req,res,next){
            if(req.path==="/libraries"){
               req.stat="true";
               next();
            }
            else if(req.path==="/authors"){
                req.stat="true";
                next();
            }

        }
    



function logger(req, res,next){
    console.log(req.path)
    next();
}

app.listen(2525,() => {
    console.log('listening on port 2525')
})