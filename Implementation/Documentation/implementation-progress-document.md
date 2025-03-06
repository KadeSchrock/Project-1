# Implementation Progress Document
## Kaden Gilbert 
### Sunday, March 2, 2025
* Created initial index.html and styles.css files
* Implemented the navigation bar, footer, background image, and featured product display into the index.html file
    * Added BlazeBoard logo to the navigation bar as a clickable link to the index.html
* Styled the navigation bar, footer, background image, and featured product display in the index.html file using the styles.css file
### Monday, March 3, 2025
* Implemented the navigation bar, footer, background image, and product displays into the product-listing-page.html file
  * Added snowboard images and buttons to the product displays
* Styled the navigation bar, footer, background image, and product displays in the product-listing-page.html file using the styles.css file
### Tuesday, March 4, 2025
* Implemented the navigation bar, footer, background image, and product ratings/testimonials into the information-page.html file
  * Added star rating system and buttons to the product ratings/testimonials
* Styled the navigation bar, footer, background image, and product ratings/testimonials in the information-page.html file using the styles.css file
* Implemented the navigation bar, footer, background image, and payment form into the payment-page.html file
  * Added first name, last name, email, phone number, and card number fields into the payment form with a submit button
  * Input validation was added to the input fields to restrict the characters the user can input
* Styled the navigation bar, footer, background image, and payment form in the payment-page.html file using the styles.css file
* Implemented the navigation bar, footer, background image, and order confirmation screen into the order-confirmation.html file
  * Added an okay button to take the user to the index.html page when pressed
* Styled the navigation bar, footer, background image, and order confirmation screen in the order-confirmation.html file using the styles.css file
* Implemented the navigation bar, footer, background image, and third party retailer display into the third-party-seller.html file
  * Added list of fictional company names to the third party retailer display
* Styled the navigation bar, footer, background image, and payment form in the third-party-seller.html file using the styles.css file
### Wednesday, March 5, 2025
* Troubleshooted input validation issues where the user's input was not restricted
* Removed the order-confirmation.html file because the method of notifying the user if their purchase is completed was altered
* Removed selectors related to elements in the order-confirmation.html file from the styles.css file because they are no longer relevant
* Tested functions of the website from beginning to end to compare the scope of the project to the created artifacts

## Solomon Preston
### Monday, March 3, 2025
* By using [Materialize Sidnav Documentation](https://materializecss.com/sidenav.html) created basic structure of Shopping cart
* Customized item card visuals using [Materialize Horizontal Card](https://materializecss.com/cards.html)
* Created funtion addItem()
  * Function made card element for item and added item to cart
* Created removeItem()
  * No functionality added
### Tuesday, March 4, 2025
* Added product data in a product list for retrieving data for processing
* Cart object for handling what user wants to buy behind the scene
* addItem() was given a means to access specific product data
  * Items are now added to the cart
  * If item is already in cart, quantity is increased
  * cart total is adjusted after any change to teh shopping cart
* removeItem() was also given a means to access specific product data
  * items are now removed from the cart
  * cart total is adjusted
* New function updateItem(product) enables user to increase product quantity in the shopping cart
  * cart quantity and total are adjusted
* Upon any webpage loading, items are readded to the cart visually so user can see what is in their cart
* All functions send data to the website session's storage for use across all of the websites pages
* Made the payment page display cart total
* Made submitPayment() function to clear shopping cart and inform user of order confirmation by redirecting user to order confirmation page
* Added comment within code to roughly explain functionality
### Wednesday, March 5, 2025
* Tested and fixed shopping cart
  * Indexing was being performed incorrectly
* Tested payment form
  * corrected certain input validation issues where users could enter characters in number input fields
  * Made the payment page alert the user of order confirmation on form submission as opposed to redirect user to the order confirmation page
  
