const path = require("path");
const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

require("./app/routes")(app);

const handler = serverless(app);
module.exports = { handler };
