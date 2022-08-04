class HomePage { 
    getLoginButton() {
        return cy.get('.col-md-4 > p > a');
    }

    getNextButton() {
        return cy.get('.next > a');
    }

    getTopTenTags() {
        return cy.get('div .tags-box span.tag-item a');
    }

    getPreviousButton() {
        return cy.get('.previous');
    }

    clickOnTag(tagName) {
        cy.get('div .tags-box span.tag-item a').each(($item,index,$list)=>{
            if($item.text() === tagName){
                cy.wrap($item).click();
            }else{
                console.log("Tag is not available");
            }
        })
    }

    getViewingTag(){
          return cy.get('h3 > a');
    }



}
export default HomePage;