var contentHandler = require('../content/controllerContent'); 
var applicationHandler = require('../application/controller');
module.exports = function (app, db) {
    var applicationController = new applicationHandler(db);
    var contentController = new contentHandler(applicationController);

    app.get('/', contentController.displayHomepage);
    
    app.get('/robots.txt', contentController.displayRobots);
    app.get('/api/contactdetails/', applicationController.getContactDetails);
    app.get('/Andrew-Jones.pdf', contentController.displayCVPdf);
//    app.get('/Andrew-Jones.docx', contentController.displayCVDocx);
    
    //Assets
    app.get('/assets*', contentController.displayAsset);
    //
    app.get('*', contentController.displayHomepage);
};