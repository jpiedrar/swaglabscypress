/// <reference types='cypress' />

class login {
    elements = {
      username: () => cy.get('#user-name'),
      password: () => cy.get('#password'),
      loginButton: () => cy.get('#login-button'),
    };

    fillForm(username, password){
        this.elements.username().type(username)
        this.elements.password().type(password)
    }

    clickLoginButton(){
        this.elements.loginButton().click()
    }

    getElements(){
        return this.elements
    }
  }
  
  export default new login();