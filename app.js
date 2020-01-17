//creating the server
//express is a library to create node
const express   = require("express");       //require acts as an #include to be able to access
const app       = express();                //calling the express/ initializing
const http      = require("http");
const server    = http.createServer(app);   // creating server and passing app

const PORT      = 8080;
server.listen(PORT);   // listening to the local port
app.use(express.static(__dirname +"/public")); //setting the html directory. _dirname = directory name
// root "route" i.e. when we go to localhost: 1111 index.html will be served

console. log("listening on port:" + PORT);

app.get('/',function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});