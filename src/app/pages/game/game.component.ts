import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private http: HttpClient, @Inject(DOCUMENT) document: Document, @Inject(PLATFORM_ID) private platformId: Object) { }

    initRan: boolean = false;
    tech: any;
    pokemon: any;
    results: any;

    ready: Boolean = false;
    displayResults: Boolean = false;
    hideControls: Boolean = false;
    amountOfQuestions: number = 0;
    questions: string[] = [];
    currentPosition: number = 0;
    amountOfQuestionsPokemon: number = 0;
    amountOfQuestionsTech: number = 0;
    response: string = '';

    ngOnInit(): void {
        this.getPokemon();
        this.getTech();
    }
    init(): void {
        if (isPlatformBrowser(this.platformId)) {
            if (this.tech && this.pokemon && this.tech.length && this.pokemon.length && this.initRan === false) {
                this.initRan = true;
                if (window.location.search.indexOf('results=') && window.location.search.match(/results=(.*)/) && window.location.search.match(/results=(.*)/)[0] && window.location.search.match(/results=(.*)/)[1]) {
                    this.reset();
                    var resultsString = decodeURIComponent(window.location.search.match(/results=(.*)/)[1]);
                    var decodedString = atob(resultsString);
                    var answers = decodedString.split('|');
                    //
                    var accuracy = 0;
                    var correct = 0;
                    var incorrect = 0;
                    var questions = [];
                    var total = 0;
                    var self: any = this;

                    for (var i = 0; i < answers.length; i++) {
                        var savedAnswer: any = answers[i];
                        if (savedAnswer) {
                            var set = savedAnswer.charAt(0) === 't' ? 'tech' : 'pokemon';
                            var currentQuestionKey = parseInt(savedAnswer.match(/(t|p)([0-9]+)/)[2]);
                            var currentQuestion = self[set][currentQuestionKey];
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

                    accuracy = parseInt(((correct / total) * 100).toFixed(0));

                    this.results = {
                        accuracy: accuracy,
                        correct: correct,
                        incorrect: incorrect,
                        questions: questions,
                    }
                    this.ready = true;
                    this.displayResults = true;
                    this.amountOfQuestions = total;
                }
            }

        }
    }
    reset() {
        this.questions = [];
        this.currentPosition = 0;
        this.ready = false;
        this.results = {
            accuracy: 0,
            correct: 0,
            incorrect: 0,
            questions: [],
        };
        this.displayResults = false;
        this.hideControls = false;
    };
    start(): void {
        // assign amount of pokemon vs tech out of amount of questions
        if (this.questionsIntegrityCheck()) {
            this.reset();
            this.amountOfQuestionsPokemon = this.getRandomNumber(parseInt((this.amountOfQuestions * 0.20).toFixed(0)), parseInt((this.amountOfQuestions * 0.80).toFixed(0)));
            this.amountOfQuestionsTech = this.amountOfQuestions - this.amountOfQuestionsPokemon;


            for (var i = 0; i < this.amountOfQuestionsPokemon; i++) {
                this.questions.push(this.getRandomQuestion(this.pokemon, this.questions));
            }
            for (var i = 0; i < this.amountOfQuestionsTech; i++) {
                this.questions.push(this.getRandomQuestion(this.tech, this.questions));
            }

            this.questions = this.shuffleArray(this.questions);
            this.questions = this.shuffleArray(this.questions);

            this.ready = true;
        } else {
            console.log('Stuff is missing...');
        }

    };

    gameOver(): void {
        const self: any = this;
        this.displayResults = true;
        this.results.accuracy = parseInt(((this.results.correct / this.amountOfQuestions) * 100).toFixed(0));

        var tinyData = '';
        for (var i = 0; i < this.results.questions.length; i++) {
            var questionObj = this.results.questions[i];
            tinyData += questionObj.actual.charAt(0) + (self[questionObj.actual].indexOf(questionObj.question)) + ':' + (questionObj.correct ? 1 : 0) + '|';
        }
        var results = btoa(tinyData);

        window.history.replaceState('', 'Results', window.location.origin + '/game/?results=' + results);
    };
    next(): void {
        this.response = '';
        if ((this.currentPosition + 1) < this.amountOfQuestions) {
            this.hideControls = false;
            this.currentPosition++;
        } else {
            this.gameOver();
        }
    };
    answer(answer: string): void {
        const self: any = this;
        if (this.hideControls === true) {
            return;
        }
        this.hideControls = true;
        var currentQuestion = this.questions[this.currentPosition];
        if (self[answer].indexOf(currentQuestion) === -1) {
            this.response = 'Incorrect!';
            this.results.incorrect++;
        } else {
            this.response = 'Correct!';
            this.results.correct++;
        }
        var correct = (this.response === 'Correct!');
        var actual = (correct ? answer : (answer === 'pokemon' ? 'tech' : 'pokemon'));
        this.results.questions.push({
            question: currentQuestion,
            answer: answer,
            correct: correct,
            actual: actual,
        });

        setTimeout(() => {
            this.next();
        }, 1000);
    };

    getRandomQuestion(questionSet: string[], currentSet: string[]): string {
        var key = this.getRandomNumber(0, questionSet.length);
        var question = questionSet[key];

        if (question && currentSet.indexOf(question) === -1) {
            return question;
        } else {
            return this.getRandomQuestion(questionSet, currentSet);
        }
    };

    questionsIntegrityCheck(): boolean {
        if (this.tech && this.tech.length && this.pokemon && this.pokemon.length) {
            return true;
        } else {
            return false;
        }
    }
    getPokemon(): void {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('pokemon')) {
                const rawPokemon: any = localStorage.getItem('pokemon');
                this.pokemon = JSON.parse(rawPokemon);
                this.init();
            } else {
                this.http.get('/assets/other/pokemon.json').subscribe((res: any) => {
                    if (res && res.values) {
                        this.pokemon = res.values;
                        localStorage.setItem('pokemon', JSON.stringify(res.values));
                        this.init();
                    }
                });
            }
        }
    }

    getTech(): void {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('tech')) {
                const rawTech: any = localStorage.getItem('tech');
                this.tech = JSON.parse(rawTech);
                this.init();
            } else {
                this.http.get('/assets/other/tech.json').subscribe((res: any) => {
                    if (res && res.values) {
                        this.tech = res.values;
                        localStorage.setItem('tech', JSON.stringify(res.values));
                        this.init();
                    }
                });
            }
        }
    }

    getRandomNumber(start: number, end: number): number {
        if (typeof start !== 'undefined' && typeof end !== 'undefined') {
            var randomNumber: number = parseInt((Math.random() * end).toFixed(0));
            if (randomNumber > end) {
                return this.getRandomNumber(start, end);
            }
            if (randomNumber < start) {
                return this.getRandomNumber(start, end);
            }
            return randomNumber;
        }
        return 0;
    }

    shuffleArray(array: Array<string>): Array<string> {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    ngOnDestroy(): void {

    }
}
