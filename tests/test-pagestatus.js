module.exports = class testPageStatus {
    constructor(server, should) {
        this.server = server;
        this.should = should;

        this.testHomepage();
        this.testTechnologies();
        this.testPortfolio();
        this.testWork();
        this.testEducation();
        this.testMore();
        this.testContact();
    }
    testHomepage() {
        let self = this;

        it("should return home page", function (done) {
            self.server.get("/").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
    testTechnologies() {
        let self = this;
        it("should return technologies page", function (done) {
            self.server.get("/technologies").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }

    testPortfolio() {
        let self = this;
        it("should return portfolio page", function (done) {
            self.server.get("/portfolio").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
    testWork() {
        let self = this;
        it("should return work page", function (done) {
            self.server.get("/work").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
    testEducation() {
        let self = this;
        it("should return education page", function (done) {
            self.server.get("/education").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
    testMore() {
        let self = this;
        it("should return more page", function (done) {
            self.server.get("/me").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
    testContact() {
        let self = this;
        it("should return contact page", function (done) {
            self.server.get("/contact").expect("Content-type", /text/).expect(200).end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
        });
    }
};