# Security Design Document
In order to secure our website it is incredibly important to test, both to ensure that the website functions as intended, but also to catch security flaws before they become larger issues. 

## Test for Intended Outcome
- Test all buttons to ensure they follow their intended action
	- Redirects lead to the correct webpage
	- Cart button opens the cart
	- Product buttons lead to the correct product
	- Confirm payment button stores info and confirms payment
- Payment info stores the correct information, and is encrypted
- Test to ensure that when items are added to cart, the correct item is added 
- All products have the correct information attached to them
	- Products have the correct description and image connected to them

## Test for Security Vulnerabilities
- Ensure payment encryption functions and that information can be decrypted once secured
- Test Input vulnerabilities
	- Test input validation for payment system.
		- Ensure that input is a specific amount of characters and only comprised of numbers
	- Test shopping cart
		- Test shopping cart for and issues caused by adding specific items or a large number of items
	- Test for unintended effect of user input
		- Ensure user input cannot break website elements (such as formatting)
		- Ensure that user action only effects elements it's supposed to (such as buttons and text fields)

