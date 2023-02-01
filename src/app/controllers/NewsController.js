class NewsController {
    // [get] /news
    index(req, res) {
        res.render('news.hbs');
    }
    // [GET] /:Slug
    show(req, res) {
        res.send('Trang chi tiet');
    }
}
module.exports = new NewsController