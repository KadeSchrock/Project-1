# Testing Results
## Test for Intended Outcomes
* Test buttons for intended action
    * Test redirects by clicking on all redirects and recording if it leads to the correct page
      * Result:
        * Home: Yes
        * Information: Yes
        * Products: Yes
        * Other Retailers: Yes
    * Test cart button by clicking on cart button and record if it opens as intended
      * Result: Yes, the shopping cart button opens upon being clicked as intended.
    * Test product information by clicking on info button for each product and record what page it leads to
      * Result:
        * BlazeBoard MKI: Leads to information page
        * BlazeBoard Premium: Leads to information page
        * BlazeBoard Sport: Leads to information page
    * Test payment button
      * Complete a test order noting whether or not the webpage acts as intended after pressing the buttom
        * Result: Yes, the webpage acts as intended when completing a test order.
      * Check if the payment info was encrypted after pressing the button
        * Result:
* Test cart functionality by adding item(s) to the cart then recording which items appear in the cart
    * Result:
      * Adding BlazeBoard MKI: BlazeBoard MKI
      * Adding BlazeBoard Premium: BlazeBoard Premium
      * Adding BlazeBoard Sport: BlazeBoard Sport
* Test cart continuity by adding items to cart, then recording items added to the cart after changing pages
    * Result: From products page, three Premium and three Sport items were added to the cart and were present after clicking each redirect link and checking the cart's contents.
* Check each product listing and note whether the information connected to it matches the intended information
    * Result: Yes, each product listing connects to the correct name, price, and picture when clicked on.
## Test for Security Vulnerabilities
* Test encruption and decryption
  * Record information entered before completing a payment
    * Result: 
  * Record the encrypted version of the payment information, and whether it matches the original information once decrypted
    * Result:
* Test for input vulnerability
  * Test payment system input validation
    * Test by inputting forbidden characters then recording the result
      * When attempting to enter letters into the phone number and payment number fields, the characters are rejected and do not appear in the input box.
      * Inputted the following characters into the first name, last name, and email address fields: 3333
        * Result:
          * First name: "Please match the requested format."
          * Last name: "Please match the requested format."
          * Email address: "Please match the requested format."
    * Test by entering too few characters then recording the result
      * When attempting to leave all fields blank, they all give this response: "Please fill out this field."
      * When attempting to enter "a@a" into the email address field, it gave this response: "Please match the requested format."
      * When attempting to enter "123" into the phone number and payment number fields, the inputs were accepted.
    * Test by entering too many characters then recording the result
      * Result:
         * Entering too many characters into the first name, last name, and email address fields: "Please match the requested format."
         * Entering too many characters into the phone number and payment number fields: the inputs were accepted.
  * Test shopping cart
    * Submit a large number of multiple types of items to the cart
      * Record whether or not it broke any website elements or if the cart did not work as intended, and at which point they broke
        * Inputted the following items into the shopping cart: MKI - 32 items, Premium - 20 items, Sport - 36 items
           * Result: When I proceeded to the checkout page, the correct total was displayed. After entering valid inputs into each payment field and clicking submit, the payment total was reset to $0.00. When I redirected back to the homepage and clicked on the shopping cart, it was empty as it should have been.
