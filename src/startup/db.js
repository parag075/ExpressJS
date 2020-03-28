// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

const mongoose = require("mongoose");
// const config = require("config");
const winston = require("winston");

module.exports = async function() {
  // const { url, dbName } = config.get("atlas");
  const db = "mongodb+srv://root:toor@cluster0-2fo6d.mongodb.net";
  // /test?retryWrites=true&w=majority";
  // try {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      dbName: "TodoListDB"
    })
    .then(() => {
      winston.log("info", "Mongodb connected");
    })
    .catch(err => {
      winston.log("error", "Could not connect to the database. Exiting now...");
      winston.log("error", err);
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

// mongoose.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     dbName: "database-name" // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
//   },
//   err => {
//     throw err;
//   }
// );
