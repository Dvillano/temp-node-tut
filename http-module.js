const http = require("http");

const server = http.createServer( (req,res) => {
    if (req.url === "/"){
        res.end("Welcome to homepage");
    }
    if (req.url === "/about"){
        res.end("Here is our short history");
    }
    
    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page</p>
        <a href = "/">Back Home</a>`
    )

});

server.listen(5000, console.log("Connected in port 5000"));