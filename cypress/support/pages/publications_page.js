

class publicationsPage {
     
 
  clickGatherJournalIssue7() {
    cy.get('[data-test="card-108"] > .card-body > .card-title > a')
      .click({force:true});

  }
  clickAddToChartButton() {
    cy.get('#form-action-addToCart')
      .click();
  }
  
  getModalHeaderTitle(){
    cy.get('#gpreviewModal').invoke()
    .get('h1[".modal-header-title"]')
    .should('contain', "Ok, 1 item was added to your cart. What's next?");

  }
    
getChartItem(){
  const cartPhp = 'cart.php?';

  cy.url().then(($url) => {
     if($url.includes(cartPhp)) {
 cy.get('.page-heading')
    .should('contain', "Your Cart (1 item)")
  
    }else 
   {
    cy.get('.modal-header-title').contains("Ok, 1 item was added to your cart. What's next?")
  }
  
  })
 }
clickProccedToCheckoutButton(){
  const cartPhp = 'cart.php?';

  cy.url().then(($url) => {
  if($url.includes(cartPhp)) {
      cy.get('.cart-actions > .button')
        .should('contain', "Check out")
        .click({force:true});
      cy.wait(2000)
  }else {
    cy.get('a[href="/checkout"]').contains('Proceed to checkout')
      .should('contain', "Proceed to checkout")
      .click({force:true});
    cy.wait(2000)
  }
  
})
}


}



export default new publicationsPage();