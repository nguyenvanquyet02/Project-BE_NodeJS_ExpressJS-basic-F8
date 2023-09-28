const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongooes')

class SiteController {
    // [get] /  HOME
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home.hbs', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    //[GET] /search
    search(req, res) {
        res.render('search.hbs');
    }
}
module.exports = new SiteController