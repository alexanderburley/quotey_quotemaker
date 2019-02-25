/* eslint-disable no-undef */
const chai = require("chai");
const sinon = require("sinon");
const wikipedia = require("wikijs")

describe("quote", () => {
    let quoteMaker;
    before(() => {
        this.clock = sinon.useFakeTimers();
        sinon.stub(wikipedia, "default").returns({page: sinon.stub().resolves(
            {info: 
                sinon.stub().resolves(
                    {birthDate: "someBirthDate", deathDate: "someDeathDate"}
            )}
        )});
    });
    after(() => {
        this.clock.restore();
    });
    beforeEach(() => {
        quoteMaker = require("./quoteBuilder"); 
    })

    describe("getQuoteOfTheDay", () => {
        describe("Given it has not been called before", () => {
            it("Should return a new quote", async () => {
                let quote = await quoteMaker.getQuoteOfTheDay();
                chai.expect(quote).to.haveOwnProperty("text");
                chai.expect(quote).to.haveOwnProperty("author");
            });
            it("Should return the same quote when called again", async () => {
                let quote1 = await quoteMaker.getQuoteOfTheDay();
                let quote2 = await quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.deep.equal(quote2);
            })
            it("should return a different quote after 24 hours after passed", async () => {
                let quote1 = await quoteMaker.getQuoteOfTheDay();
                this.clock.tick(60*60*24*1000);
                let quote2 = await quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.not.deep.equal(quote2);
                chai.expect(quote2).to.haveOwnProperty("quoteText");
                chai.expect(quote2).to.haveOwnProperty("quoteAuthor");
            });
            it("should return the same quote when it has been frozen and 24 hours have passed", async () => {
                let quote1 = await quoteMaker.getQuoteOfTheDay();
                quoteMaker.freeze();
                this.clock.tick(60*60*24*1000);
                let quote2 = await quoteMaker.getQuoteOfTheDay();
                chai.expect(quote1).to.deep.equal(quote2);
            });
            it("Should throw an error if we have not started generating quotes", () => {
                chai.expect(() => {
                    quoteMaker.freeze();
                }).to.throw();
            });
            it("Should throw an error if we have not started generating quotes", async () => {
                chai.expect(() => {
                    quoteMaker.getQuoteOfTheDay();
                    quoteMaker.freeze();
                    quoteMaker.freeze();
                }).to.throw();
            });
        });
    });
});