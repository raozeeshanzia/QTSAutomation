class HomePage { 

    elements = {
        loginButton:() => cy.get('.col-md-4 > p > a'),
        nextButton:()=> cy.get('.next > a'),
        toptentags:()=> cy.get('div .tags-box span.tag-item a'),
        listOfTags:()=> cy.get('div .tags-box span.tag-item a'),
        viewTag: ()=> cy.get('h3 > a'),
        perviousButton:()=> cy.get('.previous')
    }

    isLoginBtnVisible() {
        expect(this.elements.loginButton().should('be.visible'));
    }

    isNextBtnVisible() {
        expect(this.elements.nextButton().should('be.visible'));
    }

    isTopTenTagsVisible() {
        expect(this.elements.toptentags().should('have.length',10));
    }

    isPerviousBtnVisible() {
        expect(this.elements.perviousButton().should('be.visible'));
    }

    clickOnLoginButton() {
        this.elements.loginButton().click();
    }

    clickOnNextButton() {
        this.elements.nextButton().click()
    }

    getListOfTags(){
        return this.elements.listOfTags();
    }

    clickOnTag(tagName) {
        this.getListOfTags().each(($item,index,$list)=>{
            if($item.text() === tagName){
                cy.wrap($item).click();
            }else{
                console.log("Tag is not available");
            }
        })
    }

    isViewingTagContainText(tagName) {
        expect(this.elements.viewTag().should('have.text',tagName));
    }
}
export default HomePage;