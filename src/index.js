const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const winston = require("winston");
const cors = require("cors");

const port = process.env.port || config.get("port");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./startup/logger");
// require("./startup/cors")(app);
// app.use(cors);

require("./startup/db")();
require("./startup/routes")(app);

app.listen(port, err => {
	if (err) {
		winston.log("there was a problem", err);
	} else {
		winston.log("info", `Server is running on ${port}`);
	}
});
