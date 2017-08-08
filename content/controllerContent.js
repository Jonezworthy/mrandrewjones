function contentController(app) {
    var contentController = this;
    this.defaultMetaData = {
        metaTitle: 'Mr Andrew Jones'
        , metaDescription: 'All about Mr Andrew Jones'
        , metaOgTitle: 'All about Mr Andrew Jones'
        , metaOgImage: ''
    };

    this.displayHomepage = function (req, res) {
        return res.render('index', {metaData: contentController.defaultMetaData});
    };

    this.displayAsset = function (req, res) {
        var path = require('path');
        var applicationBasePath = path.join(__dirname, '../');
        var options = {
            root: applicationBasePath,
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        var requestedFile = req['url'];

        res.sendFile(requestedFile, options, function (err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
        });
    };
    this.displayRobots = function (req, res) {
        req['url'] = '/assets/other/robots.txt';
        contentController.displayAsset(req, res);
    };
    this.displayCVPdf = function (req, res) {
        req['url'] = '/assets/other/Andrew-Jones-v12.pdf';
        contentController.displayAsset(req, res);
    };
    this.displayCVDocx = function (req, res) {
        req['url'] = '/assets/other/Andrew-Jones-v12.docx';
        contentController.displayAsset(req, res);
    };
}

module.exports = contentController;