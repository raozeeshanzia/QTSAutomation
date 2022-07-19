class LoginPage {
    getUserNameField(){
        return cy.get('#username');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getLoginBtn(){
        return cy.get('.btn');
    }

}

export default LoginPage;