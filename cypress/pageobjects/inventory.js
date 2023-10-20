/// <reference types='cypress' />

class inventory {
    elements = {
      backPackAddToCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
      bikeAddToCartButton: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
      bikeProductTitle: () => cy.get('#item_0_title_link'),
      shoppingCartCount: () => cy.get('.shopping_cart_badge'),
      shoppingCartLink: () => cy.get('.shopping_cart_container')
    };

    addBackPackToCart(){
        this.elements.backPackAddToCartButton().click()
    }

    addBikePackToCart(){
        this.elements.bikeAddToCartButton().click()
    }

    clickShoppingCartLink(){
        this.elements.shoppingCartLink().click()
    }

    getElements(){
        return this.elements
    }
  }
  
  export default new inventory();