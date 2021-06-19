const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lengkong123_",
    database: "weblanjutan",
});

connection.connect((err) => {
    if(!err)
        console.log('Database Connected')
    else{
        console.log('Error')
    }
})

module.exports = connection

// const mysql = require("mysql");
// const Config = require("./config.js");

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "password",
//     DB: "tugas_ryu",
//     PORT: 3306,
//     JWT_SECRET: "louisaldorio"
// }

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: Config.HOST,
//   user: Config.USER,
//   password: Config.PASSWORD,
//   database: Config.DB,
//   port: Config.PORT
// });

// // open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Connected to the database.");
// });

// module.exports = connection;