# Testing Plan
## Test for Intended Outcome
- Test buttons for intended action
    - Test redirects by clicking on all redirects and recording if it leads to the correct page
    - Test cart button by clicking on cart button and record if it opens as intended
    - Test product information by clicking on info button for each product and record what page it leads to
    - Test payment button
      - Complete a test order noting whether or not the webpage acts as intended after pressing the button
      - Check if the payment info was encrypted after pressing the button
- Test cart functionality by adding item(s) to the cart then recording which items appear in the cart
- Test cart continuity by adding items to cart, then recording items added to the cart after changing pages
- Check each product listing and note whether the information connected to it matches the intended information
## Test for Security Vulnerabilities
- Test encryption and decryption
  - Record information entered before completing a payment
  - Record the encrypted version of the payment information, and whether it matches the original information once decrypted
- Test for Input Vulnerability.
  - Test payment system input validation
    - Test by inputting forbidden characters then recording the result
    - Test by entering too few characters then recording the result
    - Test by entering too many characters then recording the result
  - Test shopping cart
    - Submit a large number of multiple types of items to the cart
      - Record whether or not it broke any website elements or if the cart did not work as intended, and at which point they broke
## Test for Automated Website Updates / Website hosting functionality
- Test to see if automatic website updates are possible with docker container on TrueNas
- Test if all systems work once the website is hosted on Galdoran.org
