var contentHandler = require('../content/controllerContent'); 
var applicationHandler = require('../application/controller');
module.exports = function (app, db) {
    var applicationController = new applicationHandler(db);
    var contentController = new contentHandler(applicationController);

    app.get('/', contentController.displayHomepage);
    //
    app.get('/technologies', contentController.displayHomepage);
    app.get('/portfolio', contentController.displayHomepage);
    app.get('/work', contentController.displayHomepage);
    app.get('/education', contentController.displayHomepage);
    app.get('/me', contentController.displayHomepage);
    app.get('/contact', contentController.displayHomepage);
    app.post('/alexa', (req, res)=>{
        console.log(req);
        res.send('Received');
    });
    //
    
    app.get('/robots.txt', contentController.displayRobots);
    app.get('/api/contactdetails/', applicationController.getContactDetails);
    app.get('/Andrew-Jones.pdf', contentController.displayCVPdf);
//    app.get('/Andrew-Jones.docx', contentController.displayCVDocx);
    
    //Assets
    app.get('/assets*', contentController.displayAsset);
    //
    
    app.get('*', function(req, res){
        res.status(404).send('Ooops, this page does not exist');
    });
};