/// <reference types="Cypress" />
import LoginPage from '../examples/pageObject/LoginPage';
import HomePage from './pageObject/HomePage';
describe('Login Page Test Cases',function(){
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    before(function(){
        cy.fixture('loginTestData').then(function(data){
            this.data = data;
        })
    })

    beforeEach(function(){
        cy.visit(Cypress.env('base_url'));
    })

    it('Verify User sucessfully login',function(){
        homePage.getLoginButton().click();
        loginPage.getUserNameField().type(this.data.username);
        loginPage.getPasswordField().type(this.data.password);
        loginPage.getLoginBtn().click();
    })
})