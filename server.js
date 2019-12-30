const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 9090;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/',
  express.static(__dirname + '/public')
);
app.listen(SERVER_PORT, function () {
    console.log("Server started on http://localhost:3333");
});
