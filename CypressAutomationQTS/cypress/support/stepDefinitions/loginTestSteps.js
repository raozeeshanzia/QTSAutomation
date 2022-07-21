import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageObject/LoginPage';
import HomePage from '../pageObject/HomePage';
const loginPage = new LoginPage();
const homePage = new HomePage();
Given('User is on home page',()=> {
     expect(homePage.getLoginButton().should('be.visible'));
})

When('user click on login button',()=> {
    homePage.getLoginButton().click();        
})

Then('user enter username and password',()=>{
    loginPage.getUserNameField().type('raoz');
    loginPage.getPasswordField().type('test');
    
})

And('click on login Button',()=>{
    loginPage.getLoginBtn().click();
})

Then('verify that user is successfully logion',()=>{
    const loginBtnText = homePage.getLoginButton().text();
    expect(loginBtnText).to.be('Logout');

})