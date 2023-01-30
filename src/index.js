const express = require('express')
const app = express()
const port = 8080
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan')


app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'))


//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');// dat cho app sd view engine la handlebars
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home.hbs');
})
app.get('/news', (req, res) => {
    res.render('news.hbs');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})