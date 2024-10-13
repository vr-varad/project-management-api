# Simple Product Management API

## Setup Instructions
To set up the Simple Product Management API, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vr-varad/project-management-api.git
   ```

2. Navigate into the project directory:
   ```bash
   cd project-management-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the application in development mode:
   ```bash
   npm run dev
   ```

5. For production mode, build the application:
   ```bash
   npm build
   ```

6. Start the application in production mode:
   ```bash
   npm start
   ```

## Goals
- Enable CRUD operations on products.
- Allow filtering of products by name and category.
- Ensure data validation and error handling.

## Technology Stack
- **Backend Framework**: Express.js
- **Database**: PostgreSQL or MySQL
- **ORM**: Sequelize

## Endpoints

### 1. Create a Product
- **Endpoint**: `POST /products`
- **Description**: Adds a new product to the system.
- **Request Body**:
    ```json
    {
        "name": "string",
        "price": "number",
        "description": "string",
        "category": "string"
    }
    ```
- **Response**:
    - **201 Created**: Returns the created product.
    - **500 Internal Server Error**: Error in Creating Product

### 2. Get All Products
- **Endpoint**: `GET /products`
- **Description**: Retrieves a list of all products.
- **Response**:
    - **200 OK**: Returns an array of products.
    - **500 Internal Server Error**: Error in Getting Product

### 3. Get Product by Name
- **Endpoint**: `GET /products/name/:name`
- **Description**: Fetches a product by its name.
- **Response**:
    - **200 OK**: Returns the product if found.
    - **500 Internal Server Error**: Error in Getting Product

### 4. Get Product by Category
- **Endpoint**: `GET /products/category/:category`
- **Description**: Fetches products belonging to a specific category.
- **Response**:
    - **200 OK**: Returns an array of products in the specified category.
    - **500 Internal Server Error**: Error in Getting Product

### 5. Get Product by ID
- **Endpoint**: `GET /products/:id`
- **Description**: Fetches a product by its ID.
- **Response**:
    - **200 OK**: Returns the product if found.
    - **404 Not Found**: If no product matches the ID.
    - **500 Internal Server Error**: Error in Getting Product

### 6. Update a Product
- **Endpoint**: `PUT /products/:id`
- **Description**: Updates the details of a product.
- **Request Body**:
    ```json
    {
        "name": "string",
        "price": "number",
        "description": "string",
        "category": "string"
    }
    ```
- **Response**:
    - **200 OK**: Returns the updated product.
    - **404 Not Found**: If no product matches the ID.
    - **500 Internal Server Error**: Error in Updating Product

### 7. Delete a Product
- **Endpoint**: `DELETE /products/:id`
- **Description**: Deletes a product from the system.
- **Response**:
    - **204 No Content**: If the product is successfully deleted.
    - **404 Not Found**: If no product matches the ID.
    - **500 Internal Server Error**: Error in Deleting Product

## Data Model

### Product
- **Attributes**:
  - `id`: Integer (Primary Key)
  - `name`: String (Unique)
  - `price`: Number
  - `description`: String
  - `category`: String










