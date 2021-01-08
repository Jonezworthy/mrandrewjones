angular.module('MrAndrewJones').controller('controllerGame', function($scope, $http, $mdDialog, $mdMedia, $window) {
    var game = this;
    game.initRan = false;
    game.amountOfQuestions = 20;

    game.init = function() {
        if (game.tech && game.pokemon && game.tech.length && game.pokemon.length && game.initRan === false) {
            game.initRan = true;
            if (window.location.search.indexOf('results=') && window.location.search.match(/results=(.*)/) && window.location.search.match(/results=(.*)/)[0] && window.location.search.match(/results=(.*)/)[1]) {
                game.reset();
                var resultsString = decodeURIComponent(window.location.search.match(/results=(.*)/)[1]);
                var decodedString = atob(resultsString);
                var answers = decodedString.split('|');
                //
                var accuracy = 0;
                var correct = 0;
                var incorrect = 0;
                var questions = [];
                var total = 0;

                for (var i = 0; i < answers.length; i++) {
                    var savedAnswer = answers[i];
                    if (savedAnswer) {
                        var set = savedAnswer.charAt(0) === 't' ? 'tech' : 'pokemon';
                        var currentQuestionKey = parseInt(savedAnswer.match(/(t|p)([0-9]+)/)[2]);
                        var currentQuestion = game[set][currentQuestionKey];
                        var savedCorrect = savedAnswer.charAt((savedAnswer.length - 1)) === '0' ? false : true;

                        var actual = set;
                        var answer = savedCorrect ? set : (set === 'tech' ? 'pokemon' : 'tech');

                        var question = {
                            question: currentQuestion,
                            answer: answer,
                            correct: savedCorrect,
                            actual: actual,
                        };
                        questions.push(question);
                        total++;
                        if (savedCorrect === true) {
                            correct++;
                        } else {
                            incorrect++;
                        }
                    }
                }

                accuracy = parseInt((correct / total) * 100);

                game.results = {
                    accuracy: accuracy,
                    correct: correct,
                    incorrect: incorrect,
                    questions: questions,
                }
                game.ready = true;
                game.displayResults = true;
                game.amountOfQuestions = total;
            }
        }
    }

    game.reset = function() {
        game.questions = [];
        game.currentPosition = 0;
        game.ready = false;
        game.results = {
            accuracy: 0,
            correct: 0,
            incorrect: 0,
            questions: [],
        };
        game.displayResults = false;
        game.hideControls = false;
    };

    game.start = function() {
        // assign amount of pokemon vs tech out of amount of questions
        if (game.questionsIntegrityCheck()) {
            game.reset();
            game.amountOfQuestionsPokemon = game.getRandomNumber(parseInt((game.amountOfQuestions * 0.20)), parseInt(game.amountOfQuestions * 0.80));
            game.amountOfQuestionsTech = game.amountOfQuestions - game.amountOfQuestionsPokemon;


            for (var i = 0; i < game.amountOfQuestionsPokemon; i++) {
                game.questions.push(game.getRandomQuestion(game.pokemon, game.questions));
            }
            for (var i = 0; i < game.amountOfQuestionsTech; i++) {
                game.questions.push(game.getRandomQuestion(game.tech, game.questions));
            }

            game.questions = game.shuffleArray(game.questions);
            game.questions = game.shuffleArray(game.questions);

            game.ready = true;
        }

    };
    game.gameOver = function() {
        game.displayResults = true;
        game.results.accuracy = parseInt((game.results.correct / game.amountOfQuestions) * 100);

        var tinyData = '';
        for (var i = 0; i < game.results.questions.length; i++) {
            var questionObj = game.results.questions[i];
            tinyData += questionObj.actual.charAt(0) + (game[questionObj.actual].indexOf(questionObj.question)) + ':' + (questionObj.correct ? 1 : 0) + '|';
        }
        var results = btoa(tinyData);

        window.history.replaceState('', 'Results', window.location.origin + '/game/?results=' + results);
    };

    game.next = function() {
        game.response = '';
        if ((game.currentPosition + 1) < game.amountOfQuestions) {
            game.hideControls = false;
            game.currentPosition++;
        } else {
            game.gameOver();
        }
        $scope.$apply();
    };


    game.answer = function(answer) {
        if (game.hideControls === true) {
            return;
        }
        game.hideControls = true;
        var currentQuestion = game.questions[game.currentPosition];
        if (game[answer].indexOf(currentQuestion) === -1) {
            game.response = 'Incorrect!';
            game.results.incorrect++;
        } else {
            game.response = 'Correct!';
            game.results.correct++;
        }
        var correct = (game.response === 'Correct!');
        var actual = (correct ? answer : (answer === 'pokemon' ? 'tech' : 'pokemon'));
        game.results.questions.push({
            question: currentQuestion,
            answer: answer,
            correct: correct,
            actual: actual,
        });
        setTimeout(function() {
            game.next();
        }, 1000);
    };

    game.getRandomQuestion = function(questionSet, currentSet) {
        var key = this.getRandomNumber(0, questionSet.length);
        var question = questionSet[key];
        if (question && currentSet.indexOf(question) === -1) {
            return question;
        } else {
            return game.getRandomQuestion(questionSet);
        }
    };

    game.questionsIntegrityCheck = function() {
        if (game.tech && game.tech.length && game.pokemon && game.pokemon.length) {
            return true;
        } else {
            return false;
        }
    };

    game.getPokemon = function() {
        if (localStorage.getItem('pokemon')) {
            game.pokemon = JSON.parse(localStorage.getItem('pokemon'));
            game.init();
        } else {
            $http.get('/assets/other/pokemon.json').then(function(res) {
                if (res.data && res.data.values) {
                    game.pokemon = res.data.values;
                    localStorage.setItem('pokemon', JSON.stringify(res.data.values));
                    game.init();
                }
            });
        }
    };
    game.getTech = function() {
        if (localStorage.getItem('tech')) {
            game.tech = JSON.parse(localStorage.getItem('tech'));
            game.init();
        } else {
            $http.get('/assets/other/tech.json').then(function(res) {
                if (res.data && res.data.values) {
                    game.tech = res.data.values;
                    localStorage.setItem('tech', JSON.stringify(res.data.values));
                    game.init();
                }
            });
        }
    };

    game.getRandomNumber = function(start, end) {
        if (typeof start !== 'undefined' && typeof end !== 'undefined') {
            var randomNumber = parseInt(Math.random() * end);
            if (randomNumber > end) {
                return game.getRandomNumber(start, end);
            }
            if (randomNumber < start) {
                return game.getRandomNumber(start, end);
            }
            return randomNumber;
        }
    };

    game.shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    game.getPokemon();
    game.getTech();
});