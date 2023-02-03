const Course = require('../models/Course');

class SiteController {
    // [get] /  HOME
    home(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses);
            else res.status(400).json({ error: "ERROR!!!!" });
        })
        // res.render('home.hbs');
    }
    //[GET] /search
    search(req, res) {
        res.render('search.hbs');
    }
}
module.exports = new SiteController