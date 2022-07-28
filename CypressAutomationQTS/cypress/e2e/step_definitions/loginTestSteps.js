import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
const loginPage = new LoginPage();
const homePage = new HomePage();
Given('User is on home page',()=> {
     expect(homePage.getLoginButton().should('be.visible'));
})

When('user click on login button',()=> {
    homePage.getLoginButton().click();        
})

Then('user enter username {string} and password {string}',(username,password)=>{
    loginPage.getUserNameField().type(username);
    loginPage.getPasswordField().type(password);
    
})

And('click on login Button',()=>{
    loginPage.getLoginBtn().click();
})

Then('verify that user is successfully logion',()=>{
    const loginBtnText = homePage.getLoginButton().text();
    expect(loginBtnText).to.be('Logout');

})