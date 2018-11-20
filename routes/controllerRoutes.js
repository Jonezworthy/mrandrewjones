var contentHandler = require('../content/controllerContent'); 
var applicationHandler = require('../application/controller');
var alexa = require('../application/alexa');

module.exports = function (app) {
    var applicationController = new applicationHandler();
    var contentController = new contentHandler(applicationController);

    app.get('/', contentController.displayHomepage);
    //
    app.get('/technologies', contentController.displayHomepage);
    app.get('/portfolio', contentController.displayHomepage);
    app.get('/work', contentController.displayHomepage);
    app.get('/education', contentController.displayHomepage);
    app.get('/me', contentController.displayHomepage);
    app.get('/contact', contentController.displayHomepage);

    console.log('Set alexa');
    app.post('/alexa', alexa);
    
    app.get('/robots.txt', contentController.displayRobots);
    app.get('/api/contactdetails/', applicationController.getContactDetails);
    app.get('/Andrew-Jones.pdf', contentController.displayCVPdf);
    app.get('/.well-known/acme-challenge/lMgFk7wI84w8bfQsenmSW2gmPde2jXheN3VhnFjpg94', contentController.displayVerification);
//    app.get('/Andrew-Jones.docx', contentController.displayCVDocx);
    
    //Assets
    app.get('/assets*', contentController.displayAsset);
    //
    
    app.get('*', function(req, res){
        res.status(404).send('Ooops, this page does not exist');
    });
};