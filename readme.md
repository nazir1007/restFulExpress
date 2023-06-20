# Rest Full Express Api

A RESTful API created that performs CRUD (Create, Read, Update, Delete) operations on a collection in a MongoDB database.
which has following features given as below.

Features :
- Create a new item in the database.
- Retrieve all items from the database.
- Retrieve a specific item by its ID.
- Update an existing item by its ID.
- Delete an item by its ID.

Required Routes : 
 - GET `/api/items` 
 - GET `/api/items/:id` 
 - POST `/api/items`
 - PUT `/api/items/:id` 
 - DELETE `/api/items/:id`

Api's : 
- Create Item : http://localhost:6060/api/items
- Get all items : http://localhost:6060/api/items
- Get specific item by Id : http://localhost:6060/api/items/:id
- Update item by Id : http://localhost:6060/api/items/:id
- Delete item by Id : http://localhost:6060/api/items/:id


## Version

- node - v16.14.2
- express - v4.18.2
- mongoose - v7.3.0
- nodemon - v2.0.22
- winston - v3.9.0
- body-parser - v1.20.2 

## Getting Started

For start the project you need to have some prerequisites.

### Prerequisites
npm is mandatory for install and runing the project

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the project from Git and install all the required libraries for the project

1. Clone the repo
   ```sh
   git clone https://github.com/nazir1007/restFulExpress.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Configure

Here you have to make some configuraiton to run this project on your system
1. Install express using npm 
    ```
    npm install express
    ```
2. Install mongoose using npm 
    ```
    npm install mongoose
    ```
3. Install body-parser using npm 
    ```
    npm install body-parser
    ```
4. Install winston using npm 
    ```
    npm install winston
    ```
5. Install nodemon using npm (Ignore if already Installed)
    ```
    npm install nodemon
    ```
6. Now all configurations has been completed, run below command in terminal to run the application
    ```
    npm start
    ```
3. On browser write URL <b>http://localhost:6060</b>   

## created_at

20 june 2023