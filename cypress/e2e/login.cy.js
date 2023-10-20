import Login from "../pageobjects/login"
import Inventory from "../pageobjects/inventory"
import Cart from "../pageobjects/cart"

describe('Login Screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should validate the login screen elements', () => {
    Login.getElements().username().should('be.visible')
    Login.getElements().password().should('be.visible')
    Login.getElements().loginButton().should('be.visible')
  })
  
  it('Should be able to login', () => {
    Login.fillForm('standard_user', 'secret_sauce')
    Login.clickLoginButton()
    cy.url().should('include', 'inventory.html')
  })

  it('Should be able to add to cart', () => {
    Login.fillForm('standard_user', 'secret_sauce')
    Login.clickLoginButton()
    Inventory.addBackPackToCart()
    Inventory.getElements().shoppingCartCount().should('have.text', '1')
  })

  it('Should be validate the item title in cart', () => {
    Login.fillForm('standard_user', 'secret_sauce')
    Login.clickLoginButton()
    Inventory.addBikePackToCart()
    Inventory.clickShoppingCartLink()
    Cart.getElements().cartRow().should('contain.text', 'Sauce Labs Bike Light')
  })
})