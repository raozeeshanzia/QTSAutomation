import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
const loginPage = new LoginPage();
const homePage = new HomePage();
Given('User is on home page',()=> {
     homePage.isLoginBtnVisible();
})

When('user click on login button',() => {
    homePage.clickOnLoginButton();        
})

Then('user enter username {string} and password {string}',(username,password) => {
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    
})

And('click on login Button',() => {   
        loginPage.clickOnLoginBtn();      
})

Then('verify that user is successfully logion',() => {
    const textOfBtn = loginPage.getTextOfLoginBtn();
    expect(textOfBtn).to.be('Logout');

})