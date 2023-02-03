const express = require('express')
const app = express()
const port = 8080;
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const route = require('./routes');
const db = require('../src/config/db');
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
// app.use(morgan('combined'))


//connect to DB
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');// dat cho app sd view engine la handlebars
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})