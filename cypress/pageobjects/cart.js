/// <reference types='cypress' />

class cart {
    elements = {
      cartRow: () => cy.get('.inventory_item_name'),
    };

    getElements(){
        return this.elements
    }
  }
  
  export default new cart();