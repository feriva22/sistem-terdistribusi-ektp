var express = require("express");
var os = require("os");
var app = express();

app.listen(8081, () => {
    console.log("Server running on port 8081");
});

app.get("/hello", (req, res, next) => {
    res.json({"msg":"hello-world","hostname":os.hostname()});
});