const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongooes')



class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => res.render('me/stored-courses.hbs', {
                course: mutipleMongooseToObject(course)
            }))
            .catch(next)
    }
    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(course => res.render('me/trash-courses.hbs', {
                course: mutipleMongooseToObject(course)
            }))
            .catch(next)
    }

}
module.exports = new MeController