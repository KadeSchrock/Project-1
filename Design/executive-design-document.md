**PAGES**
* Incorporates design elements from HTML, CSS, and JavaScript

Home Page 

* Our logo at the very top of the page in the top left corner  
* Bar at the top that can take you to each page of the website (products, checkout/cart, Third Party retailers page  
* Background with one of our snowboards in use
* Preview of our product offerings   
* About us/contact us/mission statement paragraph at the bottom of the homepage
* HTML Elements:
     * title (name of the webpage): BlazeBoards Home
     * link (refers to CSS file): styles.css; stylesheet relationship
     * body (main area of webpage): includes navigation bar, background image, and will include product photos in the future
          * a img (image with an interactive link): displays company logo with a link to the homepage
          * li a (links to other webpages): refers to other webpages with links to them
     * footer (bottom of webpage): includes About Us, Contact Us, and Mission Statement
* CSS Element Styles:
     * body: background-image, background-blend-mode, background-repeat, background-size
     * ul (unordered list): top, left, list-style-type, margin, padding, overflow, background-color, opacity
     * li (list items): float
     * li a (listed links): display, color, text-align, font-size, margin, padding, text-decoration
     * a.active (current webpage identifier): background-color
     * li a:hover(shows cursor placement in navigation bar): background-color
     * footer (bottom of webpage): position, left, bottom, width, max-height, background-color, opacity, font-size, color, column-count, column-width, text-align

Products Page / Individual Products Pages

* Bar at the top that can take you to each page of the website (products, checkout/cart, Third Party retailers page  
* Tiles of each snowboard that we sell  
  * On each product tile you should be able to open them to a new page that shows you more information about each model (product uses, FAQs, ratings, testimonials) and their pricings  
  * Button to add item to cart on each product tile
* Customer ratings and testimonials for each product listing

Shopping Cart / Checkout Page

* Bar at the top that can take you to each page of the website (products, checkout/cart, Third Party retailers page  
* Buttons to be able to remove desired items from your cart  
* Total Price of your order   
* Button to take you to payment page

Third Party Retailer Page

* Bar at the top that can take you to each page of the website (products, checkout/cart, Third Party retailers page  
* Page including our retailers that you can buy from in person

**SYSTEMS**  
Shopping Cart

* Items must stay in the cart while moving across different pages within the website  
* Will be a simple container for the items you select

Payment System

* Simple submission form style of payment  
* User is able to input their payment information and if put in correctly they website will notify them of a successful purchase  
* No background purchase handling, just the two requirements above

TrueNas Hosting

* Website hosted through a docker container running on TrueNas server
* Docker container runs nginx to serve our html files onto our website from our code folder on our Github Repository
* Setup custom app on TrueNas that uses a docker yaml file to point to our github repository and runs the previously created docker file
* Domain name is Galdoran.org from CloudFlare (stole domain name not in use from a friend)

