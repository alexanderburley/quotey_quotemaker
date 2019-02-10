const chai = require("chai");
const sinon = require("sinon");
describe("quote", () => {
    let quoteMaker;
    before(() => {
        this.clock = sinon.useFakeTimers();
    });
    after(() => {
        this.clock.restore();
    });
    beforeEach(() => {
       quoteMaker = require("./quote"); 
    })

    describe("getQuoteOfTheDay", () => {
        describe("Given it has not been called before", () => {
            it("Should return a new quote", () => {
                let quote = quoteMaker.getQuoteOfTheDay();
                chai.expect(quote).to.haveOwnProperty("quoteText");
                chai.expect(quote).to.haveOwnProperty("quoteAuthor");
            });
            it("Should return the same quote when called again", () => {
                let quote1 = quoteMaker.getQuoteOfTheDay();
                let quote2 = quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.deep.equal(quote2);
            })
            it("should return a different quote after 24 hours after passed", () => {
                let quote1 = quoteMaker.getQuoteOfTheDay();
                this.clock.tick(60*60*24*1000);
                let quote2 = quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.not.deep.equal(quote2);
                chai.expect(quote2).to.haveOwnProperty("quoteText");
                chai.expect(quote2).to.haveOwnProperty("quoteAuthor");
            });
            it("should return the same quote when it has been frozen and 24 hours have passed", () => {
                let quote1 = quoteMaker.getQuoteOfTheDay();
                quoteMaker.freeze();
                this.clock.tick(60*60*24*1000);
                let quote2 = quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.deep.equal(quote2);
            });
            it("Should throw an error if we have not started generating quotes", () => {
                chai.expect(() => {
                    quoteMaker.freeze();
                }).to.throw();
            });
            it("Should throw an error if we have not started generating quotes", () => {
                chai.expect(() => {
                    quoteMaker.getQuoteOfTheDay();
                    quoteMaker.freeze();
                    quoteMaker.freeze();
                }).to.throw();
            });
        });
    });
});