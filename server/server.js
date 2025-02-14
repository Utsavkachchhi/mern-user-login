const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const database = require("./config/conn");

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api', require('./routes/UserRoutes'));

database.sync({
    logging: (log) => console.log(log),
    alter: true,
  //   force: true,
  });

app.listen(process.env.PORT,() => {
    console.log(`server is listen on port ${process.env.PORT}`);
})
