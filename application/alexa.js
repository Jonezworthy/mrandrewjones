module.exports = function (req, res) {
    httpRes = res;
    // console.log(req);


    const AlexaMessageBuilder = require('alexa-message-builder');
    const body = req.body;
    const https = require('https');

    try {
        let options;
        let req;
        let postData;
        switch (body.request.intent.name) {
            case 'howmanyskillslive':

                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/turnstile/live/?showId=5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['currentCapacity']) {
                            httpRes.send(new AlexaMessageBuilder().addText('There are currently ' + data['currentCapacity'] + ' people at the world skills show').get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();

                break;
            case 'howmanypeak':

                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/turnstile/live/?showId=5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['peakCapacity']) {
                            httpRes.send(new AlexaMessageBuilder().addText('The most people we\'ve had at one time today is ' + data['peakCapacity']).get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();

                break;
            case 'howmanycame':

                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/turnstile/live/?showId=5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['cameToday']) {
                            httpRes.send(new AlexaMessageBuilder().addText('The total amount of world skills show scans for today is ' + data['cameToday']).get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();

                break;
            case 'howmanyregistered':
                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/registration/live/5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['trade'] && typeof data['trade']['totalRegisteredTodayPeople'] !== 'undefined') {
                            httpRes.send(new AlexaMessageBuilder().addText(data['trade']['totalRegisteredTodayPeople'] + ' people or ' + data['trade']['totalRegisteredTodayRegistrations'] + ' groups have registered today, ' + data['trade']['website'] + ' via the website and ' + data['trade']['admin'] + ' at the registration desk').get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();
                break;
            case 'howmanydue':
                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/registration/live/5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['trade'] && typeof data['trade']['dueToArriveToday'] !== 'undefined') {
                            httpRes.send(new AlexaMessageBuilder().addText('There are  ' + data['trade']['dueToArriveToday'] + ' people who have not arrived yet').get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();
                break;
            case 'howmanytomorrow':
                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'GET',
                    path: '/registration/live/5af2c45b60f18d332cfbd3b9',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };

                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        if (data && data['trade'] && typeof data['trade']['dueToArriveTomorrow'] !== 'undefined') {
                            httpRes.send(new AlexaMessageBuilder().addText('There are  ' + data['trade']['dueToArriveTomorrow'] + ' people due to arrive tomorrow for the World Skills show').get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('I had an issue getting that information').get());
                        }
                    });
                });
                req.end();
                break;
            case 'lookupreg':
                options = {
                    hostname: 'api.ttfexpo.com',
                    method: 'POST',
                    path: '/registration/query?limit=10&skip=0',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'public'
                    }
                };
                //
                postData = {
                    "query": { "registrationId": "/" + body.request.intent.slots.registrationID.value + "/" },
                    "projection": { "registrationId": 1, "answers.schoolName.value": 1}
                };
                req = https.request(options, (res) => {
                    let data = '';
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        data = JSON.parse(data);
                        data = data['data'];
                        if (data.length === 0) {
                            httpRes.send(new AlexaMessageBuilder().addText('Sorry, no results').get());
                        } else if (data.length > 1) {
                            httpRes.send(new AlexaMessageBuilder().addText('I found ' + data.length + ' records').get());
                        } else {
                            httpRes.send(new AlexaMessageBuilder().addText('The school name is ' + data[0]['answers']['schoolName']['value']).get());
                        }
                    });
                });
                req.write(JSON.stringify(postData));
                req.end();
                console.log('sent:' + body.request.intent.slots.registrationID.value);
                break;

            default:

                httpRes.send(new AlexaMessageBuilder().addText(pickBadIntent()).get());

                break;
        }

    } catch (err) {
        console.log(err);
        httpRes.send(new AlexaMessageBuilder().addText(pickBadIntent()).get());
    }

}

function pickBadIntent() {
    const messages = [
        'Sorry, Ex po ware didn\'t understand you',
        'Ex po ware didn\'t have a scooby doo of what you said',
        'What was that?',
        'Sorry, did you say something?',
        'Computer says no',
        'You have to be at least level 10 to unlock that feature, only kidding, I have no idea what you said',
        'Beep boop, an error has occurred',
        'Don\'t talk to me like that!'
    ]

    let index = (Math.random() * messages.length).toFixed(0);

    return messages[index];
}