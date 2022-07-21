import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../pageObject/HomePage"

const homePage = new HomePage();

Given('user is on home page',()=> {
    expect(homePage.getLoginButton().should('be.visible'));
})

Then('verify that login button is visible',()=> {
    expect(homePage.getLoginButton().should('be.visible'));
})

Then('verify that top ten tags were display on screen',()=> {
    expect(homePage.getTopTenTags().should('have.length',10));

})

Then('verify that next button is display on screen',()=> {
    expect(homePage.getNextButton().should('be.visible'));
})