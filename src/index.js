const express = require('express')
const app = express()
const port = 8888;
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')
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
// USE PUT
app.use(methodOverride('_method'))

app.use(express.json());
//Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs', defaultLayout: "main",
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'handlebars');// dat cho app sd view engine la handlebars
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})