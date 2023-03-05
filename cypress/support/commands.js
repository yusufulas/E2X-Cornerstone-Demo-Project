Cypress.Commands.add('payment', () => {
       
    cy.fixture('check_out_page').then((data) =>{
        
        cy.get("input[id='ccNumber']").clear()
          .should('be.empty')
          .focus()
          .type(data.cardNumber,{force:true})
          .should('have.value',data.cardNumber)
    
        cy.get('#ccExpiry').clear()
          .should('be.empty')
          .focus()
          .type(data.expiryDate,{force:true})
          .should('have.value',data.expiryDate)
    
        cy.get('#ccName').clear()
          .should('be.empty')
          .focus()
          .type(data.nameOnCard,{force:true})
          .should('have.value',data.nameOnCard)
        cy.get('#ccCvv').clear()
          .focus()
          .type(data.securtyNum,{force:true})
          .should('have.value',data.securtyNum)
        cy.get('#checkout-payment-continue')
          .should('be.visible')
          .click({force:true});
    })
 
})