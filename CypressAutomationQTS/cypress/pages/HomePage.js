class HomePage { 
    getLoginButton() {
        return cy.get('.col-md-4 > p > a');
    }

    getNextButton() {
        return cy.get('.next > awerrrrr');
    }

    getTopTenTags() {
        return cy.get('div .tags-box span.tag-item');
    }

    getPreviousButton(){
        return cy.get('.previous');
    }

}
export default HomePage;