class LoginPage {
    elements = {
        usernameFiled: ()=> cy.get('#username'),
        passwordField: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('.btn')
    }

    typeUsername(username) {
        this.elements.usernameFiled().type(username);
    }

    typePassword(pasword) {
        this.elements.passwordField().type(pasword);
    }

    clickOnLoginBtn() {
        this.elements.loginButton().click();
    }
    
    getTextOfLoginBtn() {
        return this.elements.loginButton().text();
    }

}

export default LoginPage;