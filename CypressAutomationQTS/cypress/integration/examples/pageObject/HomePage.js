class HomePage { 
    getLoginButton() {
        return cy.get('.col-md-4 > p > a');
    }

    getNextButton() {
        return cy.get('.next > a');
    }

    getTopTenTags() {
        return cy.get('div .tags-box span.tag-item');
    }

}
export default HomePage;