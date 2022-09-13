import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pages/HomePage"

const homePage = new HomePage();

Given('user is on home page',() => {
    homePage.isLoginBtnVisible();
})

Then('verify that login button is visible',() => {
    homePage.isLoginBtnVisible();
})

Then('verify that top ten tags were display on screen',() => {
    homePage.isTopTenTagsVisible();

})

Then('verify that next button is display on screen',() => {
    homePage.isNextBtnVisible();
})

Then('click on next button',()=>{
    homePage.clickOnNextButton();
})

And('verify that move to next page successfully',() => {
    homePage.isPerviousBtnVisible();
})

Then('user click on given tag {string}',(tagName) => {
    homePage.clickOnTag(tagName);
})

And('verify that tag {string} link is open successfully',(tagName) => {
    homePage.isViewingTagContainText(tagName);
})