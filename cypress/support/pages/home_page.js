class HomePage {
  
  clickOnSearchButton() {
    cy.get('#quick-search-expand')
      .should('be.visible')
      .click({ force: true });
  }
  typeToSearchInput(){
    cy.get('#nav-quick-search')
      .type('Gather Journal Issue 7{enter}')
  }
  getSearchResults() {
    cy.get('ul.productGrid')
    .children()
    .should('contain','Gather Journal Issue 7')
  }   
}

export default new HomePage();
