# Security Design Document
In order to properly target each part of the website, it is important to define what the assets of the system are.
## Website Assets
The website as a whole consists of interactive and noninteractive elements. 
#### Interactive Elements
  1) Buttons
  2) Input Fields
  3) Hyperlinks
  4) Outputs
#### Noninteractive Elements
  1) Text (With exception to text with hyperlinks embeded)
  2) Images (With exception to images with hyperlinks embeded)
  3) The webpage via format and appearance
#### Connection
The website needs to establish a connection in order for users to interact with the website.
## Threats
#### Interactive Elements
  1) Buttons with many functions may cause the website to become unresponsive.
  2) Should users enter invalid data into input fields such as characters into a card number input field, website functionality could break.
  3) Hyperlinks could lead to the wrong location.
  4) Outputs can cause the website to become unusable.
#### Noninteractive Elements
  1) Any noninteractive elements elements with unintentional interactivity could cause the wbesite to become unusable.
  2) Changes to webpage format could cause The website to become unresponsive.
#### Other Threats
  1) Too much user activity can result in the website becoming unresponsive and unusable.
  2) Connecting to the website can be unsecure without proper connection establishment, allowing for thrid parties to have undesired access to anything and everything they want.
## Security Controls
In order to manage the website and mitigate threats, security controls must be implemented.
#### Interactive Elements
  1) Buttons should be limited to one function that performs one general action.
  2) Input fields should contain input validation to ensure users are entering the desired formats and data.
  3) The only hyperlinks to be used should be to either the website or venders. Vender hyperlinks should be validated before use.
  4) Outputs should be limited to certain actions and placed in specific locations
#### Noninteractive Elements
  1) Any noninteractive elements such as images and text, with exception to those with hyperlinks embeded, should remain unresponsive when a user clicks on them.
  2) Webpage reformatting should be limited and elements should not affect the whole appearance of the webpage.
#### Other Controls
  1) To reduce website unresponsiveness, user will be authenticated to ensure no bots are accessing the website. This will be done through cloudflare.
  2) The website must establish an HTTPS connection with the user.
## Conclusion
The website consists off many elements, some interactive and other noninteractive. These elements will cause threats to the security and integrity of the website.
In order to effectively target tehse threats, security controls will be implemented.
