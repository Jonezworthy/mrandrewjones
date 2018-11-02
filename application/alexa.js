module.exports = function(req, res){
    const AlexaMessageBuilder = require('alexa-message-builder');
    const message = new AlexaMessageBuilder()
    .addText('Hello from Alexa')
    .get();

    const body = req.body;


    console.log(body.context);

    res.send(message);
}