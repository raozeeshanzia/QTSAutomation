import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

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

Then('click on next button',()=>{
    homePage.getNextButton().click();
})

And('verify that move to next page successfully',()=>{
    expect(homePage.getPreviousButton().should('be.visible'));
})

Then('user click on given tag {string}',(tagName)=>{
    homePage.clickOnTag(tagName);
})

And('verify that tag {string} link is open successfully',(tagName)=>{
    expect(homePage.getViewingTag().should('have.text',tagName));
})