require('dotenv').config({path:'.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT, console.log("Servidor rodando na porta: " + process.env.PORT));