# Product Microservice

This project is a Product Microservice that is part of an Ecommerce Microservice project. The microservice is built using Node.js and MongoDB as the NoSQL database. It provides functionalities to retrieve, create, and delete products.

## Features

- Retrieve all saved products with their name, price, and description.
- Create new products.
- Delete existing products.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)

## Prerequisites

- Node.js (version >= 14.x)
- MongoDB (version >= 4.x)

## Project Structure

The project follows a clear structure including models, repositories, services, controllers, routes, and utilities:

```
ecommerce-ui-microservice/
product-microservice/
│
├── controllers/
│ └── productController.js
│
├── models/
│ └── product.js
│
├── repositories/
│ └── productRepository.js
│
├── routes/
│ └── productRoutes.js
│
├── services/
│ └── productService.js
│
├── utils/
│
├── .env
├── .gitignore
├── app.js
├── config.js
├── package.json
└── README.md
```
