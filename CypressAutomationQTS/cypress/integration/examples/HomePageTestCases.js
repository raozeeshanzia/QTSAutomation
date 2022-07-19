/// <reference types="Cypress" />
import HomePage from '../examples/pageObject/HomePage';
describe('Home Page Test Cases',function(){
    const homePage = new HomePage();

    beforeEach(function(){
        cy.visit("https://quotes.toscrape.com/");
    })

    it('verify Login Button is Display',function(){
        expect(homePage.getLoginButton().should('be.visible'));
    })

    it('Verify top ten tags visible on screen',function(){
        expect(homePage.getTopTenTags().should('have.length',10));
    })

    it('Verify next button is visible on screen',function(){
        expect(homePage.getNextButton().should('be.visible'));
    })
})