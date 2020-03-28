const winston = require("winston");

winston.configure({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.simple()
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			level: "error",
			filename: "./logs/logger.log",
			json: true,
			maxsize: 5242880 //5MB
		})
	]
});

//-----------------------------------------
// const winston = require("winston");

// module.exports = new winston.Logger({
//   transports: [
//     new winston.transports.Console({
//       level: "info"
//     })
//   ]
// });
//------------------------------------------
// const winston = require("winston");
// // require('winston-mongodb');
// require("express-async-errors");

// module.exports = function() {
//   winston.handleExceptions(
//     new winston.transports.Console({ colorize: true, prettyPrint: true }),
//     new winston.transports.File({ filename: "uncaughtExceptions.log" })
//   );

//   process.on("unhandledRejection", ex => {
//     throw ex;
//   });

//   winston.add(winston.transports.File, { filename: "logfile.log" });
//   // winston.add(winston.transports.MongoDB, {
//   //   db: 'mongodb://localhost/vidly',
//   //   level: 'info'
//   // });
// };
