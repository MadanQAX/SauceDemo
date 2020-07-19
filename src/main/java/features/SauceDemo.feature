Feature: Sauce Demo Application Testing Feature

@validcredentials @e2e @login
Scenario Outline: Swag Labs Login with Valid User

Given user enters "<username>" and "<password>" and clicks on login button
Then user is on home page

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@negativecase @invalidcredentials @e2e @login
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


@homepage @2e2
Scenario Outline: Verify Products on Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then verify products on home page

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@homepage @e2e @sort
Scenario Outline: Sort Products on Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
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

@e2e @hamburger
Scenario Outline: HamBurger options

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then verify hamburger options

Examples:
|username|password|
|standard_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @addproduct
Scenario Outline: Adding product from Home Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @addproduct
Scenario Outline: Adding product from Product Details Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then verify user adds product from product details page
|productname|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Fleece Jacket|
|Sauce Labs Onesie|
|Test.allTheThings() T-Shirt (Red)|

Examples:
|username|password|
|standard_user|secret_sauce||problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @cartpage
Scenario Outline: Continue Shopping on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user continue shopping from cart
Then user adds product from home page
|productname|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|

Examples:
|username|password|
|standard_user|secret_sauce||problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @cartpage
Scenario Outline: Remove product on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user removes product from cart

Examples:
|username|password|
|standard_user|secret_sauce||problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkout
Scenario Outline: checkout on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@negativecase @e2e @checkout
Scenario Outline: Checkout without buyer data on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user tries to checkout product from cart without buyer data

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkout
Scenario Outline: Cancel Checkout process on Your Information Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user cancels checkout process

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkout
Scenario Outline: Checkout with buyer data on Cart Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user continue checkout with buyer data

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkout
Scenario Outline: Cancel Checkout process on Overview Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
|Sauce Labs Backpack|
Then user checkout product from cart
Then user continue checkout with buyer data
Then user cancels checkout process

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkoutwoproduct
Scenario Outline: Finish Checkout process on Overview Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
Then user adds product from home page
|productname|
Then user checkout product from cart
Then user continue checkout with buyer data
Then user finish checkout process

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|

@e2e @checkout
Scenario Outline: Finish Checkout process on Overview Page

Given user enters "<username>" and "<password>" and clicks on login button
When user is on home page of swag labs
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

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|