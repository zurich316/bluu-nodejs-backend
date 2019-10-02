//requires
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

//inicializar valores
var app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
var sendMessageRoute = require('./routes/sendEmail');
var appRoute = require('./routes/app');

app.use(cors());

app.use('/send',sendMessageRoute);
app.use('/',appRoute);

// app.listen(3000, () => {
//     console.log("Servidor up 3000: \x1b[36m%s\x1b[0m", 'online');
// });

app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor up in heroku: \x1b[36m%s\x1b[0m", 'online');
});

