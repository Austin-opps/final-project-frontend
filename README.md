# EASYMART COLLECTIONS

Welcome to easymart web application. This application runs on Ruby on rails for backend and React for frontend. 
Easymart is an online shop where consumers can browse their products of interest, select products and pay for the products and then the products can be delivered to customers.
This application offers a user friendly interface that is easy to navigate through. 

## SETUP

To get started;
1. Clone this repository in your local machine.

2. Run `npm install` in the terminal to install dependencies

3. Run `npm start` to run the application in browser. 

The browser will take you to home page which is our landing page. Then a user can navigate through different pages available in our platform.

When you are  taken to the home page, you as a user you can be able to view products but you will be 
limited to add products to cart before you sign up or if you have already signed up, you should log in 
to access the cart and checkout process. 

## PAGES
You would be required to create an account, in the navigation bar, there is a link that will take you to 
sign up page.  Afterward you will be redirected to the home page. All the pages will be visible through 
the links on the navigation bar including a user profile page where you can see your details. You can 
now interact with the application.

When you are done shopping, you can logout to end the session but your details will be store in our 
database. Whenever you come back you would only be required to log in using your email and name, then from there you can access all the pages again.

## ENDPOINTS
1. `POST /signup`; This is where a user creates an account for them to be able to shop.

2. `POST /login`; If a user already has an account, he/she will just be required to insert their email 
and name and then they will be logged back to session.

3. `get/products`; A user is able to view all the products that have been posted including their prices and description.

4. `patch/product/:id`; Admin is able to update on an existing product, either to adjust prices, name o description.

5. `delete/products/:id`; Also an admin has ability to delete a certain product. This may be due different occurences or if the item is out of stock.

6. `post/product`; AN admin has ability to create/post a product on the products list for users to be able to view new products in the market.

7. `get/product:id`; an admin and also a user is able to view one particular product. For admin he/she has more options to update or delete the product while the user is only limited to view and adding it to cart.

8. `get/cart`; The cart is purposely designated to be used by the user. a user checks items he/she placed/picked to cart, then proceeds to do final payments.

9. `DELETE /logout`; The user that has an account, after being logged into session, after doing shopping he/she proceeds to logout (delete the session) but they can login with their initial details during signup process.

10. `POST /cart`; A user is allowed to pick/select products of their choice and add them to cart.

11. `PATCH /cart`; A user may need to adjust items in the cart, either increase quantity of a product or remove a product from the cart.

12. `GET /testimonials`; A user is able to view reviews/comments/testimonials left by other users regarding a certain product.

13. `POST /testimonials`; A user is able to write how they feel about a product and post their feeling in form of a comment that will be displayed to other users.

14. `DELETE /testimonials`; A user is able to delete their comments/reviews/testimonials but they are limited to delete other users reviews.

> Some of the pages are hidden from users and they are only accessed by an admin.

