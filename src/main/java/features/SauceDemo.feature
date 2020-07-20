Feature: Sauce Demo Application Testing Feature

###Test Scenario 1
@login 
Scenario Outline: Swag Labs Login with Valid User

Given user enters "<username>" and "<password>" and clicks on login button
Then user is on home page and check for prodcuts

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

####Test Scenario 2
@login @negativescenario 
Scenario Outline: Swag Labs Login with Invalid User

Given user enters "<username>" and "<password>" and clicks on login button
Then verify error message "<message>"

Examples:
|username|password|message|
|standarduser|secret_sauce|Epic sadface: Username and password do not match any user in this service|
|standard_user|secretsauce|Epic sadface: Username and password do not match any user in this service|
|locked_out_user|secret_sauce|Epic sadface: Sorry, this user has been locked out.|
|test_user|secret_sauce|Epic sadface: Username and password do not match any user in this service|
||secret_sauce|Epic sadface: Username is required|	
|standard_user||Epic sadface: Password is required|


###Test Scenario 3
@homepage 
Scenario Outline: Verify Products on Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then verify products on home page

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|


###Test Scenario 4
@homepage @sort
Scenario Outline: Sort Products on Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then verify user can sort products
|value|message|firstproduct|
|za|1st product displayed after sort of Z to A: |Test.allTheThings() T-Shirt (Red)|
|lohi|1st product displayed after sort of Low to High: |Sauce Labs Onesie|
|hilo|1st product displayed after sort of High to Low: |Sauce Labs Fleece Jacket|
|az|1st product displayed after sort of A to Z: |Sauce Labs Backpack|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 5
@homepage @hamburger
Scenario Outline: All Items option of hamburger

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user clicks on all items

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 6
@homepage @hamburger
Scenario Outline: About option of hamburger

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user clicks on about

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 7
@homepage @hamburger
Scenario Outline: Reset App State option of hamburger

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user clicks on Reset App State

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 8
@homepage @hamburger
Scenario Outline: Logout option of hamburger

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user clicks on logout

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 9
@homepage @addproduct
Scenario Outline: Adding products from Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 10
@homepage @removeproduct
Scenario Outline: Remove products on home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user removes product on home page
|productname|
|Sauce Labs Backpack|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 11
@addproduct 
Scenario Outline: Adding product from Product Details Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from product details page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Fleece Jacket|
|Sauce Labs Onesie|
|Test.allTheThings() T-Shirt (Red)|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 12
@addproduct @removeproduct
Scenario Outline: Remove product from Product Details Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from product details page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
Then user removes products from product details page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 13
@cartpage @removeproduct
Scenario Outline: Remove products on Cart page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user removes products from cart
|productname|
|Sauce Labs Backpack|

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 14
@cartpage
Scenario Outline: Continue Shopping on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user continue shopping from cart

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 15
@checkout @test
Scenario Outline: checkout on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 16
@checkout
Scenario Outline: checkout without product on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user checkout product from cart

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 17
@negativescenario @checkout
Scenario Outline: Checkout without buyer data on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user tries to checkout product from cart without buyer data

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 18
@checkout
Scenario Outline: Cancel Checkout process on Your Information Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user cancels checkout process

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 19
@checkout
Scenario Outline: Checkout with buyer data on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user continue checkout with buyer data

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 20
@checkout 
Scenario Outline: Cancel Checkout process on Overview Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user continue checkout with buyer data
Then user cancels checkout process

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 21
@e2e 
Scenario Outline: Finish Checkout process without product

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user checkout product from cart
Then user continue checkout with buyer data
Then user finish checkout process
Then user clicks on logout

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

###Test Scenario 22
@e2e
Scenario Outline: Finish Checkout process with products

Given user enters "<username>" and "<password>" and clicks on login button
When user is on swag labs home page
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Fleece Jacket|
|Sauce Labs Onesie|
|Test.allTheThings() T-Shirt (Red)|
Then user checkout product from cart
Then user continue checkout with buyer data
Then user finish checkout process
Then user clicks on logout

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|