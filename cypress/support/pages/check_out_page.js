import { faker } from '@faker-js/faker';

class checkOutPage {
    

    validateCheckOutPage(){
        cy.url().should('include','checkout')
    }
    checkPrivacyPlociy(){
        cy.wait(2000)
        cy.get('input[class="form-checkbox optimizedCheckout-form-checkbox"]')
          .check({force: true})
        
         
    }
    typeRandomEmailAddress() {
        const emailAddress = faker.internet.email();
        cy.get('#email')
          .should('be.empty')
          .focus()
          .type(emailAddress)
          .should('have.value', emailAddress);
      }
    clickContinueBtnForCustumer(){
        cy.get('[data-test="customer-continue-as-guest-button"]')
        .should('be.visible')
        .click({force:true});
       
    }
    validateShippingPage(){
        cy.get('[href="/checkout"]').click();
       
    }
    getShippingAdressHeding(){
        cy.wait(2000)
        cy.get('[data-test="shipping-address-heading"]')
          .should('be.visible')
          
      }
    getBillingAdressHeding(){
        cy.get('first-name')
          .should('contain','Billing Address')
          
      }
    typeFirstNameForShipping(){
        const firstName = 'EX2'
        cy.get('input[name="shippingAddress.firstName"]')
          .clear()
          .should('be.empty')
          .focus()
          .type(firstName)
          .should('have.value', firstName);
       
    }
    confirmFirstNameForBilling(){
       
        cy.get('input[name="firstName"]')
          .should('have.value', firstName);
       
    }
    typeLastNameToShipping(){
        const lastnName = 'EX2LastName'
        cy.get('input[name="shippingAddress.lastName"]').clear()
          .should('be.empty')
          .focus()
          .type(lastnName)
          .should('have.value', lastnName);
    }
    confrimLastNameToBilling(){
        
        cy.get('input[name="shippingAddress.lastName"]').clear()
          .should('have.value', lastnName);
    }
    typefirstAdressLineToShipping(){
        const firstAdLine = '20 St Thomas Street'
        cy.get('input[name="shippingAddress.address1"]').clear()
        .should('be.empty')
        .focus()
        .type(firstAdLine)
        .should('have.value', firstAdLine)
    }
    confirmfirstAdressLineToBilling(){
         cy.get('input[name="address1"]')
          .should('have.value', firstAdLine)
       
    }
    typeCityNameToShipping(){
        const adCity = 'London'
        cy.get('[data-test="cityInput-text"]').clear()
          .should('be.empty')
          .focus()
          .type(adCity)
          .should('have.value', adCity)
       
    }
    confirmCityNameToBilling(){
        
        cy.get('input[name="city"]')
          .should('have.value', adCity)
       
    }
    typePostalCodeToShipping(){
        const postalCode = 'SE1 9RS'
        cy.get('input[name="shippingAddress.postalCode"]')
        .should('be.empty')
        .focus()
        .type(postalCode,{force:true})
        .should('have.value', postalCode);
        
       
    }
    confirmPostalCodeToBilling(){
        cy.get('input[name="shippingAddress.postalCode"]')
        .should('have.value', postalCode);
        
    }
    typePhoneToShipping(){
        const phoneNumber = '+44 (0) 207 100 3748'
        cy.get('input[name="shippingAddress.phone"]')
        .should('be.empty')
        .focus()
        .type(phoneNumber,{force:true})
        .should('have.value', phoneNumber)
    }
    confirmPhoneToBilling(){
        
        cy.get('input[name="phone"]')
          .should('have.value', phoneNumber)
    }
    
    validateSameAsBillingChecked(){
        cy.get('input[id="sameAsBilling"]')
        .should('be.checked')
    }
    typecommentToShipping(){
        const commentShipping = 'Thank You'
        cy.get('input[name="orderComment"]').clear()
        .should('be.empty')
        .focus()
        .type(commentShipping,{force:true})
        .should('have.value', commentShipping)
    }
    clickContinueBtnForSipping(){
        cy.wait(3000)
        cy.get('#checkout-shipping-continue')
          .should('be.visible')
          .click({force: true})
         
    }
    clickContinueBtnForBilling(){
        cy.get('#checkout-billing-continue')
          .should('be.visible')
          .click({force: true})
    }
    getPaymetSectionExpanded(){
      cy.get('[data-test="payment-method-name"]')
      .should('be.visible')
    }
   
    getConfirmationForPayment(){
        cy.get('[data-test="order-confirmation-heading"]')
        .should('have.text','Thank you EX2!')
    }
    confirmOrderedItemQuantity(){
    var ItemQuantity = '1 x Gather Journal Issue 7'
    cy.get('[data-test="cart-item-product-title"]')
      .should('have.text',ItemQuantity)
    }
    confirmOrderedItemPrice(){
        var itemPrice = '$18.95'
        cy.get("[data-test='cart-item-product-price']")
          .should('have.text',itemPrice)
    }
    validateTotalPayment(){
        var totalPayment = '$28.95'
        cy.get('[data-test="cart-total"] > .cart-priceItem > .cart-priceItem-value > [data-test="cart-price-value"]')
          .should('have.text',totalPayment)
    }
    validateCheckoutPage(){
        const path = 'all/gather-journal-issue-7';
    
        cy.url().then(($url) => {
           if($url.includes(path)) {
        cy.get('#previewModal > .modal-content > .modal-header > .modal-header-title')
          .should('contain', "Ok, 1 item was added to your cart. What's next?");
        cy.get('[href="/checkout"]')
          .should('contain', 'Proceed to checkout')
          .click({force:true});
           cy.wait(2000)
        } else  {
          cy.get('.cart-actions > .button')
            .click({force:true})
          cy.wait(2000)
        }
        })
    
    }
   
}

export default new checkOutPage();