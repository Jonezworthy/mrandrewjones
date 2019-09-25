var contentHandler = require('../content/controllerContent');
var applicationHandler = require('../application/controller');
var alexa = require('../application/alexa');
const fs = require('fs');
const path = require('path');
const sendSlack = require('/var/www/severnvine/sendSlack');
const sendText = require('/var/www/severnvine/sendText');
const slackChannel = '#team_it_only';
const slackBot = 'AJ Coffee Bot';

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

    app.get('/coffee-on', (req, res) => {
        var min = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        var hours = new Date().getHours();
        var time = hours + ':' + min;
        sendSlack(slackChannel, slackBot, 'Coffee has been put on! (' + time + ')');
            setTimeout(() => {
                sendSlack(slackChannel, slackBot, 'Coffee should be available!'); 
            }, 480000);
        res.send('Put on');
    });
    app.get('/coffee-ready', (req, res) => {
        var min = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        var hours = new Date().getHours();
        var time = hours + ':' + min;
        sendSlack(slackChannel, slackBot, 'Coffee is available! (' + time + ')');

        res.send('Available');
    });
    app.get('/coffee-empty', (req, res) => {
        var min = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        var hours = new Date().getHours();
        var time = hours + ':' + min;
        sendSlack(slackChannel, slackBot, 'Coffee is empty! (' + time + ')');
        res.send('Empty');
    });

    app.get('/robots.txt', contentController.displayRobots);
    app.get('/api/contactdetails/', applicationController.getContactDetails);
    app.get('/Andrew-Jones.pdf', contentController.displayCVPdf);
    app.get('/.well-known/acme-challenge/lMgFk7wI84w8bfQsenmSW2gmPde2jXheN3VhnFjpg94', contentController.displayVerification);
    //    app.get('/Andrew-Jones.docx', contentController.displayCVDocx);

    //Assets
    app.get('/assets*', contentController.displayAsset);
    //

    app.get('*', function (req, res) {
        res.status(404).send('Ooops, this page does not exist');
    });
};