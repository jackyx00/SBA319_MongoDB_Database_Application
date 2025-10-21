# Online Grocery API

A simple App built with Node.js, Express, and MongoDB (Mongoose) to manage users, products, and orders for an online grocery system.

## Features
- CRUD operations for Users, Products, and Orders
- MongoDB Atlas integration via Mongoose
- Schema validation and field constraints
- Data seeding endpoints for quick database setup
- MVC structure (Models, Controllers, Routes)
- Error handling and clean JSON responses

## API Endpoints

### Users (/users)
- GET /list (Get all users)
- POST /create (Create a new user)
- PUT /update/:id (Update user by ID)
- DELETE /delete/:userId (Delete user by user ID)
- GET /seed (Reset & seed user data)

### Products (/products)

- GET /list (Get all products)
- POST /create (Add a new product)
- PUT /update/:id (Update product by ID)
- DELETE /delete/:itemId (Delete product by item ID)
- GET /seed (Reset & seed product data)

### Orders (/orders)

- GET /cartList/:userId (Get all orders for a user)
- POST /create (Create a new order)
- PUT /update/:id (Update order by ID)
- DELETE /delete/:cartId (Delete order by cart ID)
- GET /seed (Reset & seed order data)

## Future
- inventory_logs — to track stock changes.
- categories — to organize items (Fruits, Vegetables, Beverages, etc.).

