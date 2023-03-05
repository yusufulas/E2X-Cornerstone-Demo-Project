Feature: Purchasing a product fuction

Scenario: Searching for a product in the search box
   Given I am on the Cornerstone Demo page
    When I click on search button
    And I type Gather Journal Issue 7 and enter
    Then I should get the search result successfully

Scenario:Selecting the product in the search results
    Given I am on the search result page
    When I click on Gather Journal Issue 7
    Then I should see the product only in the new page
    
Scenario:Adding the product to the chart 
    Given I am on the pruduct chart page 
    When I click on the Add to Chart button
    Then I should see the pruduct added to the chart

Scenario:Adding the product to the checkout
    Given I am on the chart page
    When I click Proceed to checkout button
    Then I should see the Check out page displayed

Scenario: Filling in the Custumer form section
    Given I am on the checkout page custumer section 
    When I check the privacy policy check box
    And I type my email address in the email input box
    And I click on the customer continue button
    Then I should see the Shopping section  expanded in the checkout page

Scenario: Filling in Shipping Address form section
    Given I am on the Shipping section
    When I fill in the shipping adress 
    And I click on the shopping continue button
    Then I should see the "Peyment" section expanded in the checkout page

Scenario: Filling in the Peyment  section
    Given I am on the Payment section page 
    When I fill in the card payment form 
    Then I should see the order placed successfully