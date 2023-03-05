/// <reference types='cypress' />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../support/pages/home_page';
import publicationsPage from '../../support/pages/publications_page';
import checkOutPage from '../../support/pages/check_out_page';
Given('I am on the Cornerstone Demo page', () => {
    cy.clearCookies()
    cy.clearLocalStorage() 
    cy.visit('/');  
   cy.contains('Accept All Cookies', { timeout: 20000 }).click({force:true})
    
})

When('I click on search button', () => {
        homePage.clickOnSearchButton();
       })
When('I type Gather Journal Issue 7 and enter', () => {
       homePage.typeToSearchInput();
})
Then('I should get the search result successfully', () => {
      homePage.getSearchResults()
    })
        
Given('I am on the search result page', () => {
  cy.clearCookies()
  cy.clearLocalStorage() // clear all local storage
  cy.visit('/');
   
  cy.contains('Accept All Cookies', { timeout: 20000 }).click({force:true})
     homePage.clickOnSearchButton();
     homePage.typeToSearchInput(); 
  
    })
Then('I click on Gather Journal Issue 7', () => {
        publicationsPage.clickGatherJournalIssue7()
       })
Then('I should see the product only in the new page', () => {
    cy.title().should('eq', 'Gather Journal Issue 7 - Cornerstone Demo')
       })
       
Given("I am on the pruduct chart page", () => {
   cy.clearCookies()
   cy.clearLocalStorage() 
   cy.visit('/');

   cy.contains('Accept All Cookies', { timeout: 20000 })
     .click({force:true})
   homePage.clickOnSearchButton();
   homePage.typeToSearchInput();
   publicationsPage.clickGatherJournalIssue7()

})
When('I click on the Add to Chart button', () => {
     publicationsPage.clickAddToChartButton() 
})
Then('I should see the pruduct added to the chart', () => {
        publicationsPage.getChartItem()
})

Given('I am on the chart page', () => {
    cy.clearCookies()
    cy.clearLocalStorage() 
    cy.visit('/');
    
    cy.contains('Accept All Cookies', { timeout: 20000 }).click({force:true})
    homePage.clickOnSearchButton();
    homePage.typeToSearchInput();
    publicationsPage.clickGatherJournalIssue7()
    publicationsPage.clickAddToChartButton()
  
    
   })
 When('I click Proceed to checkout button', () => {
    publicationsPage.clickProccedToCheckoutButton()
   })
Then('I should see the Check out page displayed', () => {
    checkOutPage.validateCheckOutPage()
   })
   
Given("I am on the checkout page custumer section", function () {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/');
    cy.contains('Accept All Cookies', { timeout: 20000 })
      .click({force:true})
   homePage.clickOnSearchButton();
   homePage.typeToSearchInput();
   publicationsPage.clickGatherJournalIssue7()
   publicationsPage.clickAddToChartButton()
   publicationsPage.clickProccedToCheckoutButton()
   });
When('I check the privacy policy check box', () => {
    checkOutPage.checkPrivacyPlociy()
    });
When('I type my email address in the email input box', () => {
      checkOutPage.typeRandomEmailAddress()
    });
When('I click on the customer continue button', () => {
    checkOutPage.clickContinueBtnForCustumer()
    });
Then('I should see the Shopping section  expanded in the checkout page', () => {
    checkOutPage.getShippingAdressHeding()
    });
    //5
Given('I am on the Shipping section', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/');
    cy.contains('Accept All Cookies', { timeout: 20000 })
      .click({force:true})
   homePage.clickOnSearchButton();
   homePage.typeToSearchInput();
   publicationsPage.clickGatherJournalIssue7()
   publicationsPage.clickAddToChartButton()
   publicationsPage.clickProccedToCheckoutButton()
   checkOutPage.checkPrivacyPlociy()
   checkOutPage.typeRandomEmailAddress()
   checkOutPage.clickContinueBtnForCustumer()
    })
 When('I fill in the shipping adress', () => {
    checkOutPage.typeFirstNameForShipping()
    checkOutPage.typeLastNameToShipping()
    checkOutPage.typefirstAdressLineToShipping()
    checkOutPage.typeCityNameToShipping()
    checkOutPage.typePostalCodeToShipping() 
    checkOutPage.typePhoneToShipping()
    checkOutPage.validateSameAsBillingChecked()
    cy.wait(2000);
    checkOutPage.typecommentToShipping()     
       
    })
When('I click on the shopping continue button', () => {
    checkOutPage.clickContinueBtnForSipping()
    })

Then('I should see the "Peyment" section expanded in the checkout page', () => {
    checkOutPage.getPaymetSectionExpanded()
    })
        
Given('I am on the Payment section page', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/');
    cy.contains('Accept All Cookies', { timeout: 2000 })
      .click({force:true})
      homePage.clickOnSearchButton();
      homePage.typeToSearchInput();
      publicationsPage.clickGatherJournalIssue7()
      publicationsPage.clickAddToChartButton()
      publicationsPage.clickProccedToCheckoutButton()
      checkOutPage.checkPrivacyPlociy()
      checkOutPage.typeRandomEmailAddress()
      checkOutPage.clickContinueBtnForCustumer()
      cy.wait(2000)
      checkOutPage.typeFirstNameForShipping()
      checkOutPage.typeLastNameToShipping()
      cy.wait(2000)
      checkOutPage.typefirstAdressLineToShipping()
      checkOutPage.typeCityNameToShipping()
      checkOutPage.typePostalCodeToShipping() 
      checkOutPage.typePhoneToShipping()
      checkOutPage.validateSameAsBillingChecked()
      cy.wait(2000);
      checkOutPage.typecommentToShipping()
      checkOutPage.clickContinueBtnForSipping();    
      cy.wait(2000);           
    })
           
When('I fill in the card payment form', () => {
     cy.payment()    
     cy.wait(2000);                      
    })

Then('I should see the order placed successfully', () => {
     checkOutPage.getConfirmationForPayment()
     checkOutPage.validateTotalPayment()
     checkOutPage.confirmOrderedItemPrice()
     checkOutPage.confirmOrderedItemQuantity()          
        })
