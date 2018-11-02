module.exports = function(req, res){

    console.log(req);

    const AlexaMessageBuilder = require('alexa-message-builder');
    const message = new AlexaMessageBuilder()
    .addRepromptText('Who would you like to text')
    .get();

    const body = req.body;


    console.log(body.context);

    res.send(message);
}