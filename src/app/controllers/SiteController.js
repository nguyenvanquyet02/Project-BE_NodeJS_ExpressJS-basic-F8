class SiteController {
    // [get] /  HOME
    home(req, res) {
        res.render('home.hbs');
    }
    //[GET] /search
    search(req, res) {
        res.render('search.hbs');
    }
}
module.exports = new SiteController